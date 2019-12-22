type SN = string | number;

export function sum(...values: SN[]): number {
    return values.reduce((acc: number, next: SN) => {
        if (!isString(next)) {
            return acc += next;
        }
        const num = parseInt(next, 10);
        return acc += Number.isNaN(num)
            ? 0
            : num;
    }, 0);
}

function isString(item: SN): item is string {
    return typeof item === 'string';
}
