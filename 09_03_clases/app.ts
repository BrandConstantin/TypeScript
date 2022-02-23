interface Shape{
    readonly sides: number,
    area(): number,
    perimeter(): number
}

function process(s: Shape){ /** do something */ }

class Rectangle implements Shape{
    sides = 4;

    constructor(readonly width: number, readonly height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * this.width + 2 * this.height;
    }
}

let r = new Rectangle(4, 5);
process(r);