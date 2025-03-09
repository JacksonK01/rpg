class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    greet() {
        console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old, I'm from " + this.city)
    }
}

export default Person;