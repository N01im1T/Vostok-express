const modals = () => {
    // var modalCallMeBack = document.getElementById('modal-call-me-back');
    // var modalBecomeOurPartner = document.getElementById('modal-become-our-partner');
    // var modalGetTransferPrice = document.getElementById('modal-get-transfer-price');

    // var btnCallMeBack = document.getElementById('btn-call-me-back');
    // var btnBecomeOurPartner = document.getElementById('btn-become-our-partner');
    // var btnsGetTransferPrice = document.querySelectorAll('.btn-get-transfer-cost');

    // const modals = [modalCallMeBack, modalBecomeOurPartner, modalGetTransferPrice];

    // btnCallMeBack.addEventListener('click', function() {
    //     toggleDiv(modalCallMeBack);
    // });

    // btnBecomeOurPartner.addEventListener('click', function() {
    //     toggleDiv(modalBecomeOurPartner);
    // });

    // btnsGetTransferPrice.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         toggleDiv(modalGetTransferPrice);
    //     });
    // });

    // modals.forEach(modal => {
    //     modal.querySelector('.close-icon').addEventListener('click', function() {
    //         closeDiv(modal);
    //     });

    //     window.addEventListener('click', function(event) {
    //         modals.forEach(modal => {        
    //             if (event.target == modal) {
    //                 closeDiv(modal);
    //             }
    //         });
    //     });
    // });

    // function toggleDiv(div) {
    //     div.classList.remove('fade-out');
    //     div.classList.add('fade-in');
    //     div.style.display = "block";
    // }

    // function closeDiv(div) {
    //     div.classList.remove('fade-in');
    //     div.classList.add('fade-out');
    //     setTimeout(() => {
    //         div.style.display = "none";
    //     }, 500);
    // }

    const language = document.documentElement.lang;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modal.appendChild(modalContainer);

    const header = document.createElement('h4');
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-icon');
    closeButton.innerHTML = `
        <img src="../assets/images/modals/close-window-btn.svg" alt="close-icon">
    `;

    const form = document.createElement('form');
    form.setAttribute('action', '/submit');
    form.setAttribute('method', 'post');

    const userNameInput = document.createElement('div');
    const userEmailInput = document.createElement('div');
    const userPhoneInput = document.createElement('div');
    const userMessageInput = document.createElement('div');

    userNameInput.classList.add('input-container');
    userEmailInput.classList.add('input-container');
    userPhoneInput.classList.add('input-container');
    userMessageInput.classList.add('input-container');

    userNameInput.innerHTML = `
        <input type="text"  id="name" class="styled-input"
        pattern="[a-zA-Zа-яА-Я]{2,11}" placeholder=" " required>
        <label for="name" class="floating-label"
        data-original-text="${language === 'en' ?
            ('How can we address you?') :
            ('Как к вам обращаться?')}"
        data-error-message="${language === 'en' ?
            ('How can we address you? (incorrect input)') :
            ('Как к вам обращаться? (не верный ввод)')}">
            ${language === 'en' ?
            ('How can we address you?') :
            ('Как к вам обращаться?')}
        </label>
    `;
    userEmailInput.innerHTML = `
        <input type="email"  id="email" class="styled-input"
        placeholder=" " required>
        <label for="email" class="floating-label"
        data-original-text="${language === 'en' ?
            ('Your e-mail') :
            ('Ваша электронная почта')}"
        data-error-message="${language === 'en' ?
            ('Your e-mail (incorrect input)') :
            ('Ваша электронная почта (не верный ввод)')}">
            ${language === 'en' ? 'Your e-mail' : 'Ваша электронная почта'}
        </label>
    `;
    userPhoneInput.innerHTML = `
        <input type="tel" id="telephone" class="styled-input"
        pattern="\\+?[0-9]{1,4}?[-.\\s]?(\\(?\\d{1,3}?\\)?[-.\\s]?)?[\\d-\\s]{5,10}"
        placeholder=" " required>
        <label for="telephone" class="floating-label"
        data-original-text="${language === 'en' ?
            ('Your phone number') :
            ('Ваш номер телефона')}"
        data-error-message="${language === 'en' ?
            ('Your phone number (incorrect input)') :
            ('Ваш номер телефона (не верный ввод)')}">
            ${language === 'en' ? 'Your phone number' : 'Ваш номер телефона'}
        </label>
    `;
    userMessageInput.innerHTML = `
        <input type="text"  id="message" class="styled-input"
        placeholder=" ">
        <label for="message" class="floating-label">
            ${language === 'en' ? 'Your message' : 'Ваше сообщение'}
        </label>
    `;

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn', 'btn-primary');
    submitButton.setAttribute('type', 'submit');

    const dataProcessing = document.createElement('p');
    dataProcessing.classList.add('personal-data-processing');
    dataProcessing.innerHTML = (language === 'en' ?
        (
            `By clicking the button, you consent to the 
            <a href="" target="_blank" rel="noopener noreferrer">
            processing of personal data</a>`
        ) :
        (
            `Нажимая на кнопку, вы даете согласие на <a href="" target="_blank"
            rel="noopener noreferrer">обработку персональных данных</a>`
        ));

    function createAndShowModal(btn) {
        modal.classList.remove('fade-out')
        modalContainer.innerHTML = '';
        form.innerHTML = '';
        form.classList.value = '';

        switch (btn) {
            case 'btn-call-me-back':
                header.textContent = (language === 'en' ?
                    ('Call me back') : ('Перезвоните мне'));

                form.classList.add('reply-form');

                submitButton.classList.add('btn-call-me-back');
                submitButton.textContent = (language === 'en' ?
                    ('Call me back') : ('Перезвоните мне'));

                form.append(userNameInput, userPhoneInput, submitButton);
                modalContainer.append(header, closeButton, form, dataProcessing);

                modal.classList.add('fade-in');
                document.body.appendChild(modal);

                break;

            case 'btn-become-our-partner':
                header.textContent = (language === 'en' ?
                    ('Become our partner') : ('Стать нашим партнером'));

                form.classList.add('reply-form');

                submitButton.classList.add('btn-call-me-back');
                submitButton.textContent = (language === 'en' ?
                    ('Call me back') : ('Перезвоните мне'));

                form.append(userNameInput, userPhoneInput, submitButton);
                modalContainer.append(header, closeButton, form, dataProcessing);

                modal.classList.add('fade-in');
                document.body.appendChild(modal);

                break;

            case 'btn-get-transfer-cost':
                header.textContent = (language === 'en' ?
                    ('Get the cost of the transfer') :
                    ('Получите расчет стоимости трансфера'));
                form.classList.add('calculator-form');

                submitButton.classList.add('btn-calculate-price');
                submitButton.textContent = (language === 'en' ?
                    ('Calculate cost') : ('Расчитать стоимость'));

                form.append(userNameInput, userEmailInput, userPhoneInput,
                    userMessageInput, submitButton);
                modalContainer.append(header, closeButton, form, dataProcessing);

                modal.classList.add('fade-in');
                document.body.appendChild(modal);

                break;

            default:
                console.log("There isn't such button")

                break;
        }
    };

    document.getElementById('btn-call-me-back').addEventListener('click', function () {
        createAndShowModal('btn-call-me-back');
        modal.style.display = 'block';
    });

    document.getElementById('btn-become-our-partner').addEventListener('click', function () {
        createAndShowModal('btn-become-our-partner');
        modal.style.display = 'block';
    });

    document.querySelectorAll('.btn-get-transfer-cost').forEach(btn => {
        btn.addEventListener('click', function() {
            createAndShowModal('btn-get-transfer-cost');
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');
        modal.style.display = 'none';
        setTimeout(() => {
            modal.remove();
        }, 500);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('fade-in');
            modal.classList.add('fade-out');
            modal.style.display = 'none';
            setTimeout(() => {
                modal.remove();
            }, 500);
        }
    });
}

export default modals;