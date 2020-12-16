
export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(name) {
    const text = name.split(' ');
    this.firstName = text[0];
    this.lastName = text[1];
  },
}

