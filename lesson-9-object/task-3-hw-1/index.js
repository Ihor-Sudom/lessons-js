
const getPeople = obj => Object.entries(obj)
                         .map(item => item[1]).flat()
                         .map(item => Object.values(item)).flat();


