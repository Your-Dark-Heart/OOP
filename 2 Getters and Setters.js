class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
    this.numOfRequestsForArea = 0;
  }


  get area() {
    this.numOfRequestsForArea++;
    return this.width * this.height
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

const square1 = new Square(4);
console.log(square1.area);

square1.area = 25;

console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);


console.log(square1.numOfRequestsForArea)