
const getTotalRevenue = arr => arr.map(item => Object.entries(item))
                  .map(item => item[1])
                  .map(item => item[1])
                  .reduce((a, b) => a + b);
