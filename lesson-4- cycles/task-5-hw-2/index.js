let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if(i % 2 === 1) {
        console.log('Found');
        sum += i;
    }
}
console.log(sum * 5 > 5000 ? 'Bigger' : 'Smaller or equal');