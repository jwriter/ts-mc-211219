// type NonReadonly<T> = {
//     -readonly [P in keyof T]: T[P]
// }
//
// interface IAccount {
//     readonly firstName?: string;
//     readonly age: number;
// }
//
// const acc: IAccount = {
//     age: 33,
//     firstName: 'Ihor',
// }
//
// acc.firstName = 'Vald';
//
// let a: Exclude<any, any>

type IPerson = {
    readonly name: string;
    age: number;
    info: { male: boolean };
    subjects: string[]
}

type RemoveByTypes<T, E>= {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T];

const p: RemoveByTypes<IPerson, number > = 'age'; // 'name' | 'info' | 'subject'
const userUpdate: Partial<IPerson> = {
    age: 22;
}
