/**
 * CommonJs - every file is module (by default)
 * Modules - Encapsulated code (Only share minimum)
 */

const pple = require("./4-name");
const sayHello = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grains");

const name = "Douglas"; // this can be available anywhere in this file

const sayHi = (name) => {
  console.log(`Hello ${name}`);
};

sayHi("Dorah");
sayHello(name);
sayHello(pple.john);
sayHello(pple.susan);

console.log(pple);
