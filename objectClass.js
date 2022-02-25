//Object
//method 01
var person = new Object();

person.name = 'Sihab';
person.age = 25;

console.log(person.name, person.age);

//method 02
var person = {
    name: 'Sihab',
    age: 25,
    'hobbies': 'movies'
};

console.log(person['name'],person['age'],person['hobbies']);

//function method
var person = {
    name: 'Sihab',
    age: 25,
    sayName: function(){
        return this.name;
    }
};

console.log(person.sayName(),person.age);

//nested object
var person = {
    name: 'Sihab',
    age: 25,
    sayName: function(){
        return this.name;
    },
    likes:{
        movies:{
            one: 'Avengers',
            two: 'Batman'
        },
        book: 'Tintin'
    }
};

console.log(person.likes['movies'].two);