// const mod1 = require('./mod1').;
// const sayName = require('./mod1').sayName;
// console.log(mod1)
// console.log(sayName());
// const mod1 = require('./mod1');
// const sayName = mod1.sayName;
// console.log(sayName());
// const { name, surname, sayName } = require('./mod1');
// console.log(name, surname);
// console.log(sayName()); 

const path = require('path');
const axios = require('axios');
const { Person } = require('./mod1');

// const p1 = new Person('Jhuan');
// console.log(p1)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));