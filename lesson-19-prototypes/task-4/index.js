
const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(str) {
    let [firstName, lastName] = str.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
  },
};

export default user;