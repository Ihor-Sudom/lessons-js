
export class User {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
 
  static createEmpty() {
    this.name = '';
    this.age = null;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  
  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  }
}

