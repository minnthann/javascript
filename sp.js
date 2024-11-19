// constructor function

function person (name, age){
    this.name = name;
    this.age = age;
    this.hello = function() {
        return `hello. may mai $(this.name)`;;
    };
    const person1 = new person("javan", 43);
    console.log(person1.nane);
    console.log(person1.age);
    console.log(person1.hello());
}


const person = {
    name: "aaa",
    age: "43",
    sayHello: function(){
        return `hello.mya ${this.name}`;
    }
};
console.log(person.name);
console.log(person.age);
console.log(person.sayHello);