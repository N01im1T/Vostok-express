const forms = (container = document) => {
  const form = container.querySelectorAll("form"),
    inputs = container.querySelectorAll("input");

  const lang = document.documentElement.lang || "en";

  const messages = {
    ru: {
      loading: "Загрузка...",
      success: "Спасибо! Скоро мы с вами свяжемся",
      failure: "Что-то пошло не так...",
      fillField: "Заполните поле",
      invalidFormat: "Введите данные в указанном формате",
    },
    en: {
      loading: "Loading...",
      success: "Thank you! We will contact you soon",
      failure: "Something went wrong...",
      fillField: "Please fill in this field",
      invalidFormat: "Please enter the data in the specified format",
    },
  };

  const message = messages[lang] || messages.en;

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (event) => {
      event.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      formData.append("action", "submit_form");

      // Add server
      postData(backend['ajax_url'], formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });

  // Prevent default invalid messages
  inputs.forEach((input) => {
    input.addEventListener("invalid", () => {
      if (input.validity.valueMissing) {
        input.setCustomValidity(message.fillField);
      } else {
        input.setCustomValidity(message.invalidFormat);
      }
    });

    input.addEventListener("input", () => {
      input.setCustomValidity("");
    });
  });
};

export default forms;
