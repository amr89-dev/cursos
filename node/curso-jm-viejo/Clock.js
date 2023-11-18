class Clock {
  constructor() {
    setInterval(() => {
      this.theTime();
    }, 1000);
  }
  theTime() {
    const date = new Date(),
      hrs = addZero(date.getHours()),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      msg = `${hrs}:${min}:${sec}`;

    function addZero(num) {
      return num < 10 ? "0" + num : num;
    }

    console.log(msg);

    return Clock;
  }
}

module.exports = Clock;
