const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacciSeries(n) {
    const fibSeries = [1, 1];
    let nextFib = 2;
    
    while (nextFib <= n) {
        fibSeries.push(nextFib);
        nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
    }
    
    return fibSeries;
}

rl.question("Enter a number: ", function(givenNumber) {
    const series = fibonacciSeries(parseInt(givenNumber));
    console.log(`Fibonacci series up to ${givenNumber}:`, series);
    rl.close();
});
