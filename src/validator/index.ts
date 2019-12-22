import 'reflect-metadata';

const RANGE_KEY: unique symbol = Symbol('RANGE_KEY')

export function Validate(target: object, key: string, desc: PropertyDescriptor): void {
    const originalValue = desc.value;
    desc.value = (...args: unknown[]) => {
        const existingRange: { [key: string]: [number, number] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range;
            const paramValue = args[Number(paramIndex)];
            if (Number(paramValue) < min || Number(paramValue) > max) {
                throw new Error(`Error in ${target.constructor.name} instance. Parameter of method ${key} on position ${paramIndex}  out of range ${[min, max]}`);
            }
        }
        return originalValue(...args);
    };
}

export function Range(min: number = 1, max: number = 10) {
    return (target: object, key: string, paramIndex: number) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[paramIndex] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    };
}
