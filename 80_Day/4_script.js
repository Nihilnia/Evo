class Point{
    constructor(axisX, axisY){
        this.axisX = axisX,
        this.axisY = axisY
    }

    static distance(a, b){
        const distanceX = a.axisX - b.axisY;
        const distanceY = a.axisY - b.axisY;

        return Math.hypot(distanceX, distanceY);
    }
}


var point01 = new Point(376487, 435663);
var point02 = new Point(372347, 235663);

var resultZ = Point.distance(point01, point02);
console.log(resultZ);