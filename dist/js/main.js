var typed = new Typed('#element', {
    strings: ['Music', 'NFTs', 'Arts'],
    typeSpeed: 100,
    backSpeed: 200,
    loop: true
});

const swiper = new Swiper('.swiper.promo', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 2000
    }
});