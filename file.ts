let period = 1;
const baseUrl = 'http://localhost';

let firstName = 'Ihor';

interface IAcc {
    firstName: string;
    getName(): string;
}

let account: IAcc = {
    firstName,
    getName() {
        return this.firstName;
    },
};

let p = {...account};
let dates = [1, 2, 3];
let newDates = [...dates];

let {firstName: myName} = account;
let [, secondDate] = dates;

for (const date of dates) {
    console.log(date);
}

let sum = (a: number, b: number) => a + b;

class Point {
    public x: number = 1;
    public y: number = 2;

    public sum() {
        return this.x + this.y;
    }
}

function userMassage([start, end]: TemplateStringsArray, {firstName: newName}: typeof account) {
    return `${start}${newName}${end}`;
}

let b = account?.firstName; // ?? sum(1, 2);
