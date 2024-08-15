
const person = 
{
  name: "Петя",
  getName: function()
  {
    console.log(`Привет! Меня зовут ${this.name}`);
  }
}
person.getName();
const person2 = Object.create(person);

//const element = Object.entries(person);

console.log(Object.entries(person))



person2.getName();

person2.name = "Вася"


person2.getName();

