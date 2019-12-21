// const x = 5;
// let a: 1 | 2 | 3 = 10;

// enum AnimationEnum {
//     EASE_IN = 'ease-in1111',
//     EASE_OUT = 'ease-in',
// }
//
// interface IAnimation {
//     delay: number;
//     type: AnimationEnum;
// }
//
// class UIElement {
//     public animate(options: IAnimation): void {
//
//     }
// }
//
// new UIElement().animate({delay: 1000, type: AnimationEnum.EASE_IN});


interface IFact {
    factId: number;
    description: string;
    rating: number;
}

const dataList: { action: string, data: IFact } [] = [];
const a = 'asdasdasd'
const uniqueValue = () => {
    return a;
}

dataList.map((item) => {
    //@ts-ignore
    if (item.data[uniqueValue()] === 2) {

    }
    return item;
})

let input = document.getElementById('root') as HTMLInputElement;
input.addEventListener('input', (e: Event) => {
    const el = e.target as HTMLInputElement;
    const v = el.value;
});
