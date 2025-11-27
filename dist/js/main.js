var typed = new Typed('#element', {
    strings: ['Music', 'NFTs', 'Arts'],
    typeSpeed: 100,
    backSpeed: 200,
    loop: true
});

const swiperPromo = new Swiper('.swiper.promo', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 2000
    }
});

const swiperCollection = new Swiper('.swiper.collection-slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 2000
    }
});

// Header

const headerLine = document.querySelector('.header')

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    console.log(currentScroll)

    showHeader(currentScroll)
})

function showHeader(currentScroll) {
    if(currentScroll >= 400) {
        headerLine.classList.add('show-header')
    } else {
        headerLine.classList.remove('show-header')
    }
}