
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerID: null,

  // option 1

  // startTimer() {
  //   console.log('startTimer was called');

  //   function handler() {
  //     this.secondsPassed += 1;
  //     console.log(this.secondsPassed); this.secondsPassed += 1;
  //     console.log(this.secondsPassed);
  //   }
  //   const handlerWithContext = handler.bind(this);
  //   setInterval(handlerWithContext, 1000);
  // },

  // option 2

  startTimer() {
   const timerID = setInterval(() => {
      this.secondsPassed += 1;
       if (this.secondsPassed === 60) {
         this.secondsPassed = 0;
         this.minsPassed += 1;
       }
    }, 1000);
    this.timerID = timerID;
  },
  getTime() {
  if (this.secondsPassed < 10) {
    return `${this.minsPassed}:0${this.secondsPassed}`;
  }
  return `${this.minsPassed}:${this.secondsPassed}`
  },
  stopTimer() {
    clearInterval(this.timerID);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
}


// input: num - timerID
// output: 
// clearInterval()