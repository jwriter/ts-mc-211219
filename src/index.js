"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./menu/data");
const menu_1 = require("./menu/menu");
// const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
$('.menu')
    .html(menu_1.generateMenu(data_1.list))
    .on('click', (e) => {
    const el = e.target;
    if (!el.classList.contains('title')) {
        return;
    }
    const parentLi = el.parentElement;
    parentLi.classList.toggle('menu-open');
});
// navMenu.innerHTML = generateMenu(list);
// navMenu.addEventListener('click', (e: MouseEvent) => {
//     const el: HTMLElement = e.target as HTMLElement;
//     if (!el.classList.contains('title')) {
//         return;
//     }
//     const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
//     parentLi.classList.toggle('menu-open');
// });
