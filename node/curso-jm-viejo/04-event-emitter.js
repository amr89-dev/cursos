const EventEmitter = require("events").EventEmitter,
  inherits = require("util").inherits;
/* pub = new EventEmitter();

pub.on("myEvent", (message) => {
  console.log(message);
});

pub.once("myEvent", (message) => {
  console.log(`Se emite el mensaje por primera vez`);
});

pub.emit("myEvent", "Soy un emisor de eventos");
pub.emit("myEvent", "volviendo a emitir");
pub.removeAllListeners("myEvent");
pub.emit("myEvent", "volviendo a emitir por tercera vez"); */

//Herencia en los event emitter

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
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    msg = `${hrs}:${min}:${sec}`;

  console.log(msg);
};

const cucu = new Clock();
cucu.on("tictac", () => {
  cucu.theTime();
});
