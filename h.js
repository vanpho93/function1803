// Class Point - props: x, y - method: getDistance 
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

const p1 = new Point(1, 1);
const p2 = new Point(Math.sqrt(2), Math.sqrt(2));

console.log(p1.getDistance());
console.log(p2.getDistance());
