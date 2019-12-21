// T extends U ? X : N
//
//  type nonUndefined<T> = T extends null | undefined ? never : T;
//  type someType = string | null | undefined | number;
// //
//  const aa: NonNullable<someType> = true;
//
//
// const arr: [() => number, number] = [() => 1, 1];
// const arr1: [() => { firstName: string, age: number }, number] = [
//     () => {
//         return {firstName: 'Ihor', age: 33};
//     },
//     1,
// ];
//
// type FirstType<T> =
//     T extends [infer U, ...unknown[]]
//         ? U extends (...args: unknown[]) => infer R ? R : never
//         : never;
//
// const fn: FirstType<typeof arr> = 's';
// const user: FirstType<typeof arr1> = {firstName: 'Ihor', age: 33};
//
//
// let a: Exclude<any, any>

function fn(_a: string, _b: boolean): number {
    return 1;
}   // => string | boolean | number

type NonFunction<T> = T extends Function ? never : T;
type FunctionParamsAndReturn<T> = T extends (...args: infer Args) => infer R
    ? keyof Args | R
    : never;

const snb: FunctionParamsAndReturn<typeof fn> = {a: 1};

let a: Exclude<any, any>
