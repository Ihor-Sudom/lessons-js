
export const wallet = {
  transactions: [2, 8, 9, 25],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
}


