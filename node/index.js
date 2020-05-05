console.log("hellow world")

// installing npm pakages
// const fs = require('fs');
// fs.copyFileSync("test1.txt", "test2.txt");

// npm pakages 
        // superheroes pkg!
const superheroes = require("superheroes");
var name = superheroes.random();
console.log(name);
var AllName = superheroes.all;
// console.log(AllName)

const supervillains = require('supervillains');
var  villiansName =supervillains.random();
console.log(villiansName);