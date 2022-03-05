window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu'),
        menuItem = document.querySelectorAll('.header_item'),
        hamburger = document.querySelector('.hamburger')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active')
        menu.classList.toggle('header_menu--active')
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--active')
            menu.classList.toggle('header_menu--active')
        })
    })
})