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

const swiperTeam = new Swiper('.swiper.team', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 2000
    }
});

const swiperTesti = new Swiper('.swiper.testi', {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000
    }
});

// Header

const headerLine = document.querySelector('.header')
const btnUp = document.querySelector('.btn-up')

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    console.log(currentScroll)

    showHeader(currentScroll)
    showUpBtn(currentScroll)
})

function showHeader(currentScroll) {
    if(currentScroll >= 400) {
        headerLine.classList.add('show-header')
    } else {
        headerLine.classList.remove('show-header')
    }
}

function showUpBtn(currentScroll) {
    if(currentScroll >= document.documentElement.scrollHeight / 2) {
        btnUp.classList.add('show')
    } else {
        btnUp.classList.remove('show')
    }
}