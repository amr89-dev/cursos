const data = require("./my-data");
const Clock = require("./my-data");
console.log(data.name, data.email);

const cucu = new Clock();
cucu.on("tictac", () => {
  cucu.theTime();
});
