function fibonacciRecur(n, cache) {
    cache = cache || [1,1];
    if(cache[n]){
        return cache[n];
    }
    return cache[n] = fibonacciRecur(n - 1, cache) + fibonacciRecur(n - 2, cache);
}

console.log(fibonacciRecur(7));