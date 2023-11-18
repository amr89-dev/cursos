/* let fs = require("fs");
let readStream = fs.createReadStream("assets/nombre.txt");

let writeStream = fs.createWriteStream("assets/nombres_copia.txt");

readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log(`He leido ${chunk.length} caracteres`);
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Termine de leer el archivo");
});
 */

const stdin = process.stdin,
  stdout = process.stdout,
  person = {
    name: null,
    age: 0,
  };

function saveAge(age) {
  person.age = age;
  if (person.age > 18) {
    stdout.write(`${person.name} es mayor de edad, tiene ${person.age} años\n`);
  } else {
    stdout.write(`${person.name} es menor de edad, tiene ${person.age} años\n`);
  }
  process.exit();
}
function saveName(name) {
  person.name = name;
  //Vuelvo a preguntar
  const question = `Hola  ${person.name} ¿Cuantos años tienes?`;
  quiz(question, saveAge);
}
function quiz(question, callback) {
  stdin.resume();
  stdout.write(question + ": ");

  stdin.once("data", (res) => {
    callback(res.toString().trim());
  });
}
stdin.setEncoding("utf8");
quiz("¿Como te llamas?", saveName);
