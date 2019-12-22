type Constructable = new (...args: any[]) => {};

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date();
    };
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'js'];
    };
}

class Point {
    public constructor(public x: number, public y: number) {
    }
}

class MixedPoint extends Timestamped(Tagged(Point)) {
    public constructor(x: number, y: number) {
        super(x, y);
    }
}

const inst = new MixedPoint(1, 2);
console.log(inst.tags);
console.log(inst.timestamp);


abstract class AbstractInput<T> {

    constructor(private  _value: T) {
    }

    public focus(): void {
    }

    public blur(): void {
    }

    public abstract getValue(): T;
}

class Input extends AbstractInput<string> {

    private value!: string;

    public getValue() {
        return this.value;
    }
}
