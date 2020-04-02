class Animal{
  constructor(species, size){
    this.species = species;
    this.size = size;
  }
  hasLegs(){
    return this.legs !== undefined;
  }
  hasWings(){
    return this.wings !== undefined;
  }
}
class Gorilla extends Animal{
  constructor(species, size){
    super(species, size);
    this.legs = 2
  }
}
class Bird extends Animal{
  constructor(species, size){
    super(species, size);
    this.wings = 2
  }
}

const maguilla = new Gorilla('Gorilla', 'Big');
const ticotico = new Bird('Swallow', 'Tiny');


document.getElementById('vai_mulek').onclick = function(){
  console.log(maguilla.legs);
  console.log(ticotico.wings);
  console.log(maguilla.hasLegs());
  console.log(ticotico.hasLegs());
  console.log(maguilla.hasWings());
  console.log(ticotico.hasWings());




  //################# //################# //################# //#################
  document.writeln('<br>');
  document.writeln('maguilla.legs <br>');
  document.writeln('ticotico.wings <br>');
  document.writeln('maguilla.hasLegs() <br>');
  document.writeln('ticotico.hasLegs() <br>');
  document.writeln('maguilla.hasWings() <br>');
  document.writeln('ticotico.hasWings() <br>');
}