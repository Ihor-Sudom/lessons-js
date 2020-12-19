
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
  liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  },
  startMachine() {
    this.liftAnchorUp();
    this.move();
  },
  stopMachine() {
    this.stop();
    this.liftAnchorDown();
  },
  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);





