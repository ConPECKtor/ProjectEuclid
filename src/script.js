const openBtn = document.querySelector('.header__burgerButton')
const burgerMenu = document.querySelector('.header__burger')

openBtn.addEventListener('click', () => {
    burgerMenu.classList.add('header__burger--open')
})