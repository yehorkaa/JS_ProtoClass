const Human = function (name, gender) {
  this.name = name;
  this.gender = gender;

  this.getFullInfo = function () {
    return this.name + " is " + this.gender;
  };
};

const human1 = new Human("Harry", "Male");
const human2 = new Human("James", "Male");

console.log(human1.getFullInfo());
console.log(human2);

const Flat = function () {
  this.inhabitants = [];
  this.addToList = function (inhabitant) {
    if (this.inhabitants) {
      return this.inhabitants.push(inhabitant);
    }
    return this.inhabitants;
  };
};

const habitant1 = new Flat()
const habitant2 = new Flat()
habitant1.addToList(human1); //объект пустой из-за инкапсуляции, а так все ок :), решетки убрать и готово
habitant2.addToList(human2)
console.log(habitant1)
console.log(habitant2)


const Building = function(maxFlats) {
  this.flats = [];
  this.maxFlats = maxFlats;
  this.addFlat = function(flat) {
    if(flat.inhabitants.length < this.maxFlats) {
      this.flats.push(flat)
    } else {
      console.log('STOP RIGHT THERE!')
    }
  }
}

const blockOFflats = new Building(3)
blockOFflats.addFlat(habitant1)
blockOFflats.addFlat(habitant2)
console.dir(blockOFflats, {depth: 8})