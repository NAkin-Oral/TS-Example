export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}
