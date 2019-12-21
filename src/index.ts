let anyType: any = 2;
anyType.a = 1;
anyType['b'] = 2;
anyType();


let objType: object = {};
objType.a = 1;
objType['b'] = 2;
objType();
objType = [1, 2, 3, 4];
objType = 1;

Object.create(objType);

let unknowType: unknown = {};
unknowType.a = 1;
unknowType['b'] = 2;
unknowType();
unknowType = [1, 2, 3, 4];
unknowType = 1;

Object.create(unknowType);


let voidType: void = undefined;

function f(): never {
    throw new Error();
}
