class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
  }



  // Static functions have nothing to do with instances of the class. They just belong to the class itself.
  static equals(a, b) {
    // there is no "this" in a static function
    return a.width * a.height === b.width * b.height
  }

  static isSquare(width, height) {
    return width === height;
  }
}


const square1 = new Square(8);
const square2 = new Square(9);

console.log(Square.equals(square1, square2));

console.log(Square.isSquare(6, 6));