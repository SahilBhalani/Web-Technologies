function memoizeFibonacci(n, cache) {
    cache = cache || [1,1];
    if(cache[n]){
        return cache[n];
    }
    return cache[n] = memoizeFibonacci(n - 1, cache) + memoizeFibonacci(n - 2, cache);
}

console.log(memoizeFibonacci(5));