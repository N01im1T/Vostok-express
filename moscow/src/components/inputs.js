const inputs = () => {
    document.querySelectorAll('.styled-input').forEach(input => {
        if (input.id !== 'message') {    
            input.addEventListener('input', () => {
                const label = input.nextElementSibling;
                if (input.value.trim() === '') {
                    label.textContent = label.getAttribute('data-original-text');
                    return
                }

                if (input.validity.valid) {
                    input.classList.remove('invalid');
                    label.textContent = label.getAttribute('data-original-text');
                } else {
                    input.classList.add('invalid');
                    label.textContent = label.getAttribute('data-error-message');
                }
            });
        }   
    });
    
    document.querySelectorAll('input[type="tel"]').forEach(function (input) {
        input.addEventListener('input', function (e) {
            this.value = this.value.replace(/[a-zA-Zа-яА-Я]/g, '');
        });
    });

    // Processing below 683px

    const messageLabel = document.querySelectorAll('.message-label');
    const messageInput = document.querySelectorAll('.message-input');

    function updateLabelText() {
        if (window.innerWidth < 683 && window.innerWidth > 623 ||
            window.innerWidth < 340
        ) {
            messageLabel.forEach(label => {
                label.textContent = "Ваше сообщение (не обязате..)";
            });
        } else {
            messageLabel.forEach(label => {
                label.textContent = "Ваше сообщение (не обязательно)";
            });
        }
    }

    function handleFocus() {
        messageLabel.forEach(label => {
            label.textContent = "Ваше сообщение (не обязательно)";
        });
    }
    
    function handleBlur() {
        updateLabelText();
    }

    updateLabelText();

    window.addEventListener("resize", updateLabelText);

    messageInput.forEach(input => {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
    });
}

export default inputs;