//Variables
const button_menu_open = document.getElementById('button_menu_open')
const button_menu_close = document.getElementById('button_menu_close')
const responsive_menu = document.getElementById('responsive_menu')

//Funciones
const showMenu = () => {
    responsive_menu.classList.add('show-menu')
}

const hiddenMenu = () => {
    responsive_menu.classList.remove('show-menu')
}
//Eventos
button_menu_open.addEventListener('click', showMenu)
button_menu_close.addEventListener('click', hiddenMenu)