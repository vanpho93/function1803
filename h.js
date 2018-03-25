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

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {}
}

const p1 = new Point(2, 2);
const p2 = new Point(1, 1);

const l1 = new Line(p1, p2);

console.log(l1.getLength());
