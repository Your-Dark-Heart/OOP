class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  makeSound() {
    console.log(`Generic Animal Sound!`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound();
    console.log("Woof! Woof!")
  }
}


const animal = new Animal("Dom");
animal.makeSound();

const dog = new Dog("Jeff");
dog.makeSound()