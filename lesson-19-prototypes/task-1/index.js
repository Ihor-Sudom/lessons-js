
export const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} is stopped`);
  },
};

export const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
    this.stop();
  },
  stopMachine() {
    this.move();
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);



