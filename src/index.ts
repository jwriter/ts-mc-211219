// interface IUserAccount {
//     firstName: string;
//     age: number;
// }
//
// let person = IUserAccount;

// let userAccount = {
//     age: 33,
//     firstName: 'Ihor',
// }
// const {firstName, ...userAccountWithOutFirstName} = userAccount;
//
// let person: typeof userAccountWithOutFirstName;
//
// person = {
//     age: 33
// }

/*class Acc {
    public age = 33;
    public firstName = 'Ihor';
}

let acc: Acc = new Acc();*/

let isDone: boolean = true;

let str: string = 'Ts is awesome';
str = `${str} === ${isDone}`;

let num = 1;
num = 0xf00d;
num = 0b1010;
num = NaN;
num.toFixed();

let bigInt: bigint = 4n;

let nill: null = null;
let und: undefined = undefined;

const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');

let obj = {
    [key1]: 'Ts is awesome',
};

let value = obj[key1];
//
// function onlyKey1(v: typeof key1) {
//
// }
//
// onlyKey1(key2);
