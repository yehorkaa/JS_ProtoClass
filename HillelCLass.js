class Human {
  name;
  gender;
  constructor(param) {
    this.name = param.name;
    this.gender = param.gender;
  }

  getFullInfo() {
    return this.name + " is " + this.gender;
  }

  set name(value) {
    return (this.name = value);
  }

  get name() {
    return this.name;
  }

  set gender(value) {
    return (this.gender = value);
  }

  get gender() {
    return this.gender;
  }
}

const human1 = new Human({
  name: "Harry",
  gender: "Male",
});

const human2 = new Human({
  name: "James",
  gender: "Male",
});
console.log(human1);
console.log(human2);
// human1.name = 'Julia'
// console.log(human1.name);
// human1.gender = 'Female'
// console.log(human1.gender)
// console.log(human1.getFullInfo());

class Flat {
  inhabitants = [];
  addToList(inhabitant) {
    if (this.inhabitants) {
      return this.inhabitants.push(inhabitant);
    } else {
      return this.inhabitants;
    }
  }
}

const habitant1 = new Flat({});
const habitant2 = new Flat({});
habitant1.addToList(human1);
habitant2.addToList(human2);
console.log(habitant1);
console.log(habitant2);
class Building {
  flats = [];
  maxFlats;
  constructor(param) {
    this.maxFlats = param.maxFlats;
  }
  addFlat(flat) {
    if (flat.inhabitants.length <= this.maxFlats) {
      this.flats.push(flat);
    } else {
      console.log("STOP RIGHT THERE!");
    }
  }
}

const blockOFflats = new Building({
  maxFlats: 3,
});
blockOFflats.addFlat(habitant1);
blockOFflats.addFlat(habitant2);
console.dir(blockOFflats, { depth: 8 });
