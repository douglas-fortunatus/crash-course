const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");

// console.log(first);

/**
 * this will check file if the file is not there then it will create it
 */

writeFileSync(
  "./content/rightFileSync.txt",
  `The first file text was : ${first}`
);

// this will append the file
writeFileSync(
  "./content/rightFileSync.txt",
  `The first file text was : ${first}`,
  { flag: "a" }
);

/**
 * this will run with this specific order till each part is executed
 */
