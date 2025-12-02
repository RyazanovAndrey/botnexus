const headerLine = document.querySelector('.header')
const btnUp = document.querySelector('.btn-up')
const mobileIcon = document.querySelector('.mobile-icon')
const mobileLinks = document.querySelectorAll('.mobile-link')
const mobileMenu = document.querySelector('.mobile-menu')

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
    },
});

const swiperCollection = new Swiper('.swiper.gallery-slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

const swiperTeam = new Swiper('.swiper.team', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
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

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY

    showHeader(currentScroll)
    showUpBtn(currentScroll)
})

function showHeader(currentScroll) {
    if (currentScroll >= 50) {
        headerLine.classList.add('active')
    } else {
        headerLine.classList.remove('active')
    }
}

function showUpBtn(currentScroll) {
    if (currentScroll >= document.documentElement.scrollHeight / 2) {
        btnUp.classList.add('show')
    } else {
        btnUp.classList.remove('show')
    }
}

// Mobile Menu

mobileIcon.addEventListener('click', () => {
    mobileIcon.classList.toggle('open')

    if (mobileIcon.classList.contains('open')) {
        mobileMenu.classList.add('open')
    } else {
        mobileMenu.classList.remove('open')
    }
})

mobileLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        mobileIcon.classList.remove('open')
    })
})