const header = () => {
    const topBar = document.querySelector('.top-bar');
    const mobileBarOverlay = document.querySelector('.mobile-bar-overlay');
    const burgerBtn = document.querySelector('.mobile-burger-btn');
    const closeBtn = document.querySelector('.mobile-btn-close-top-bar');
    const callMeBackBtn = document.getElementById('btn-call-me-back');

    function handleResize() {
        if (window.innerWidth > 1150) {
            topBar.classList.remove('mobile-bar');
            topBar.classList.remove('active');
            topBar.classList.remove('deactive');
            callMeBackBtn.classList.remove('black');
            mobileBarOverlay.style.display = 'none';
            burgerBtn.style.display = 'none';
        } else if (topBar.classList.contains('active')) {
            burgerBtn.style.display = 'none';
        } else {
            burgerBtn.style.display = 'block';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    burgerBtn.addEventListener('click', function() {
        topBar.classList.add('mobile-bar');
        topBar.classList.remove('deactive');
        topBar.classList.add('active');
        callMeBackBtn.classList.add('black');
        mobileBarOverlay.style.display = 'block';
        burgerBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        topBar.classList.remove('active');
        topBar.classList.add('deactive');
        callMeBackBtn.classList.remove('black');
        burgerBtn.style.display = 'block';
        topBar.classList.remove('mobile-bar');
        mobileBarOverlay.style.display = 'none';
    });

    mobileBarOverlay.addEventListener('click', function() {
        topBar.classList.remove('active');
        topBar.classList.add('deactive');
        setTimeout(() => {
            topBar.classList.remove('mobile-bar');
            mobileBarOverlay.style.display = 'none';
        }, 500);
    });
}

export default header;