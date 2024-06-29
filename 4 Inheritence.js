class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    console.log(`I am ${this.name}, and I am ${this.age} years old.`)
  }
}

class Programmer extends Person {
  constructor(name, age, yearsOfExperience) {
    super(name, age);

    this.yearsOfExperience = yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding :)`)
  }
}



const programmers = [
  new Programmer("Dom", 56, 12),
  new Programmer("Jeff", 24, 4)
]



function developSorware(programmers) {
  // Develop software
  for (let programmer of programmers) {
    programmer.code()
  }
}

developSorware(programmers);




/*
const person1 = new Person("Jeff", 45);
const programmer1 = new Programmer("Dom", 56, 12);

console.log(person1);
console.log(programmer1);

programmer1.code();
programmer1.describe();
*/