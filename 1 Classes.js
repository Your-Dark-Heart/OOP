class Rectangle {
  // Set Up the Object
  constructor(width, height, color) {
    console.log("Rectangle has been created!");

    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea() {
    return this.width * this.height
  }

  printDescription() {
    console.log(`I am a rectangle of ${this.width} x ${this.height}, and I am ${this.color} :)`)
  }
}

const myRectangleA = new Rectangle(3, 5, "blue");
const myRectangleB = new Rectangle(10, 5, "red");

console.log(myRectangleA.getArea());
myRectangleA.printDescription();
console.log(myRectangleB.getArea());
myRectangleB.printDescription();
