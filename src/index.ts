class BasePoint {
    public constructor(
        public x: number,
        protected y: number,
        private z: number,
    ) {

    }

    public sum(): number {
        return this.x + this.y + this.z;
    }
}

class Point extends BasePoint {
    public constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }
}

const p = new BasePoint(1, 2, 3);
p.
