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
}

export default inputs;