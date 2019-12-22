"use strict";
// function getFullName(this: { name: string, surname: string }) {
//     return `${this.name} ${this.surname}`;
// }
//
// let account = {
//     name: 'Ihor',
//     surname: 'Nepipenko',
//     getFullName,
// }
//
// account.getFullName();
class UIElement {
    addClickListener(_onclick) {
    }
}
class Handler {
    onClickBad(_event) {
        this.info = 'e.message';
    }
}
let h = new Handler();
let uiElement = new UIElement();
