import { list } from './menu/data';
import { generateMenu } from './menu/menu';

// const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;

$('.menu')
    .html(generateMenu(list))
    .on('click', (e: Event) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (!el.classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
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
