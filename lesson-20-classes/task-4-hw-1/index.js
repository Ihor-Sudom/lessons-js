
class Order {

  constructor (price, city, type) {
    this.id = string(Math.random());
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === 'false') {
      this.isConfirmed = true;
      this.isConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === "Sell") {
      return true;
    }
    return false;
  }
}