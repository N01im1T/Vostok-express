import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const aboutCompany = () => {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        drag   : 'free',
        snap   : true,
        lazyLoad: 'nearby',
        pagination: true,
        arrows : true,
    });

    splide.mount();
}

export default aboutCompany;