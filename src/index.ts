/** Object **/
interface IAcc {
    firstName: string;
    age: number;
}

type TAcc = {
    firstName: string;
    age: number;
}

/**Function*/

interface IFunction {
    (a: number, b: number): number;
}

type TFunction = (a: number, b: number) => number;

/**Extends **/

type TPoint = IPartialPoint & {
    y: number;
}

let p: TPoint = {
    x: 1,
    y: 2,
    sum(): { name: string, age: number } {
        return {name: 'asd', age: 1};
    }
}

interface IPartialPoint {
    x: number;

    sum(): { name: string };
}

interface IPoint extends TPartialPoint {
    y: number;
}

type TPartialPoint = {
    x: number;
}

/**Class*/

type Arr = string | number;


interface IPartialPoint {
    z: number;
    sum(): { age: number };
}
