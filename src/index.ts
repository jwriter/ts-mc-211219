// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
// average(1, 2);
// average('1', 2, true)
// const num: number = average(1, 2, 3);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1 );
// average(1, 2);
// average('1', 2, true)
// const num: number = average(1, 2, 3);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1 );
// average(1, 2);
// average('1', 2, true)
// const num: number = average(1, 2, 3);

type SN = number | string;

function isString(item: SN): item is string {
    return typeof item === 'string';
}

function average(a: string, b: number): string;
function average(a: number, b: string, c: string): string;
function average(a: string, b: string, c: number): string;
function average(...args: SN[]): string {
    let total: number = 0;
    for (const item of args) {
        if (isString(item)) {
            total += Number(item);
            continue;
        }
        total += item;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}


average('2', 1);
average(1, '2', '1');
average('2', '1', 2);

average(1);
average(1, 2);
average('1', 2, '2');
average('1', '2', '2');
average(1, 2, 3, 4, 5, 5, 55, '123');
const num: number = average(1, 2, 3);

$().on
