type User = {
    readonly firstName: string,
    readonly age?: number,
};
const user: User = {
    firstName: 'Ihor',
}

let keys: keyof User = 'firstName';


let width: (typeof user)['age'] = 1;


let action: {
    readonly type: string;
    [key: string]: any;
}


let arr: [number, string] = [1, 'props'];
arr[100] = 23;
arr.push(22);

let x = [10, 'props'] as const;

let p = {
    arr,
    firstName: 'Ihor',
} as const;
p.arr.push(1);
