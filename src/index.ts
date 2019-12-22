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

type Cb = (this: void, e: Event) => void;

class UIElement {
    public addClickListener(_onclick: Cb): void {

    }
}

class Handler {
    public info!: string;

    public onClickBad(this: this, _event: Event): void {
        this.info = 'e.message';
    }
}

let h = new Handler();
let uiElement = new UIElement();
uiElement.addClickListener(h.onClickBad)
