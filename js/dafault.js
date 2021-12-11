function onClickHamburgerMenuButton(event) {
    event.classList.toggle("hamburger_menu_open");
    document.querySelector(".hamburger_menu").classList.toggle("open")
    document.querySelector(".hamburger_menu_background").classList.toggle("open")
}