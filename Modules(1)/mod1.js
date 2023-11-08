// const name = 'Jhuan';
// const surname = 'Lucas';

// const sayName = () => name + ' ' + surname;

//  module.exports.name = name;
// module.exports.surname = surname;
//  module.exports.sayName = sayName;

// exports.name = name;
// exports.surname = surname;
// exports.sayName = sayName;
// this.qualquerCoisa = 'O que eu quiser exportar';

class Person {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Person = Person;