const buttons = () => {
  const toggleBtn = document.getElementById("toggle-btn");
  const ruBtn = document.getElementById("ru");
  const enBtn = document.getElementById("en");

  // Check site language
  document.addEventListener("DOMContentLoaded", function () {
    if (enBtn) {
      const enSelected = enBtn.getAttribute("aria-selected") === "true";
      if (enSelected) {
        const indicator = document.querySelector(".indicator");
        if (indicator) {
          indicator.style.transform = "translateX(0)";
        }
      }
    }
  });

  function switchLanguage(language) {
    if (language === "ru") {
      window.location.href = "/city-template/public/ru/index.html";
    } else if (language === "en") {
      window.location.href = "/city-template/public/en/index.html";
    }
  }

  if (toggleBtn && ruBtn && enBtn) {
    toggleBtn.addEventListener("click", function () {
      const ruSelected = ruBtn.getAttribute("aria-selected") === "true";

      if (ruSelected) {
        ruBtn.setAttribute("aria-selected", "false");
        enBtn.setAttribute("aria-selected", "true");
        const indicator = document.querySelector(".indicator");
        if (indicator) {
          indicator.style.transform = "translateX(0)";
        }
        switchLanguage("en");
      } else {
        ruBtn.setAttribute("aria-selected", "true");
        enBtn.setAttribute("aria-selected", "false");
        const indicator = document.querySelector(".indicator");
        if (indicator) {
          indicator.style.transform = "translateX(100%)";
        }
        switchLanguage("ru");
      }
    });
  }
};

export default buttons;
