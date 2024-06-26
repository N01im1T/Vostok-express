const modals = () => {
    var modalCallMeBack = document.getElementById('modal-call-me-back');
    var modalBecomeOurPartner = document.getElementById('modal-become-our-partner');
    var modalGetTransferPrice = document.getElementById('modal-get-transfer-price');

    var btnCallMeBack = document.getElementById('btn-call-me-back');
    var btnBecomeOurPartner = document.getElementById('btn-become-our-partner');
    var btnsGetTransferPrice = document.querySelectorAll('.btn-get-transfer-cost');

    const modals = [modalCallMeBack, modalBecomeOurPartner, modalGetTransferPrice];

    btnCallMeBack.addEventListener('click', function() {
        toggleDiv(modalCallMeBack);
    });

    btnBecomeOurPartner.addEventListener('click', function() {
        toggleDiv(modalBecomeOurPartner);
    });

    btnsGetTransferPrice.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleDiv(modalGetTransferPrice);
        });
    });

    modals.forEach(modal => {
        modal.querySelector('.close-icon').addEventListener('click', function() {
            closeDiv(modal);
        });
        
        window.addEventListener('click', function(event) {
            modals.forEach(modal => {        
                if (event.target == modal) {
                    closeDiv(modal);
                }
            });
        });
    });

    function toggleDiv(div) {
        div.classList.remove('fade-out');
        div.classList.add('fade-in');
        div.style.display = "block";
    }

    function closeDiv(div) {
        div.classList.remove('fade-in');
        div.classList.add('fade-out');
        setTimeout(() => {
            div.style.display = "none";
        }, 500);
    }
}

export default modals;