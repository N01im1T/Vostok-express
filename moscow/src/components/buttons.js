const buttons = () => {
    const toggleLanguage = () => {
        var ru = document.getElementById('ru');
        var en = document.getElementById('en');
        
        if (ru.classList.contains('active')) {
            ru.classList.remove('active');
            en.classList.add('active');
        } else {
            en.classList.remove('active');
            ru.classList.add('active');
        }
    };
}


export default buttons;
