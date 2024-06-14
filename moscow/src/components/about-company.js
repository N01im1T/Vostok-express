import Splide from '@splidejs/splide';

const aboutCompany = () => {
    var splide = new Splide( '#about-company-awards', {
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