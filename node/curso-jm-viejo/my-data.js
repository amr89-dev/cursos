const name = "Amado",
  email = "amr89.dev@gmail.com",
  _phone = "4331006";

module.exports.name = name;
module.exports.email = email;

const Clock = (() => {
  const EventEmitter = require("events").EventEmitter,
    inherits = require("util").inherits;
  const Clock = function () {
    const self = this;

    setInterval(() => {
      //console.log("hola");
      self.emit("tictac");
    }, 1000);
  };

  inherits(Clock, EventEmitter);

  Clock.prototype.theTime = function () {
    const date = new Date(),
      hrs = addZero(date.getHours()),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      msg = `${hrs}:${min}:${sec}`;

    function addZero(num) {
      return num < 10 ? "0" + num : num;
    }

    console.log(msg);
  };
  return Clock;
})();

module.exports = Clock;
