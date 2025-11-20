//* Export multiple utility functions
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str){
    return str.split('').reverse().join('');
}

export function toLowerCase(str){
    return str.toLowerCase();
}