import 'reflect-metadata';

function checkTypeInRunTime(target: object, key: string) {
    const {name: typeName}: Function = Reflect.getMetadata('design:type', target, key);
    let val: unknown;
    Object.defineProperty(target, key, {
        get(): any {
            return val;
        },
        set(runTimeValue: any): void {
            const realType = typeof runTimeValue;
            if (realType !== typeName.toLowerCase()) {
                throw  new Error(`type of ${key} is not ${typeName}. Actual is ${realType}`);
            }
            val = runTimeValue;
        },
    });
}

// function logProp(target: object, key: string) {
//     const fn = Reflect.getMetadata('design:type', target, key)
//     console.log(fn.name);
//     console.log(Reflect.getMetadata('design:paramtypes', target, key));
//     console.log(Reflect.getMetadata('design:returntype', target, key));
//     console.log(Reflect.getMetadata('design:typeinfo', target, key));
// }

// function logMethod(target: object, key: string, _desc: PropertyDescriptor) {
//     // const fn = Reflect.getMetadata('design:type', target, key)
//     // console.log(fn.name);
//     console.log(Reflect.getMetadata('design:paramtypes', target, key));
//     console.log(Reflect.getMetadata('design:returntype', target, key));
//     console.log(Reflect.getMetadata('design:typeinfo', target, key));
// }

class Person {
    @checkTypeInRunTime
    public name: string = 'Ihor';

    public age: number = 0;

    public patch(name: string, age: number): number {
        this.name = name;
        this.age = age;
        return 1;
    }
}

const p = new Person();
console.log(p.name);
p.name = 'Evgenia';
console.log(p.name);
try {
    (p.name as any) = [];
} catch (e) {
    console.log(e);
    console.log(p.name);
}

