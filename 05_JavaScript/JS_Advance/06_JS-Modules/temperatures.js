//Convert Farenheit to Celcius
export function toCelcius(farenheit) {
    return ( farenheit - 32) * 5 / 9;
}

//Convert Celcius to Farenheit
export function toFarenheit(celcius) {
    return ( celcius * 9 / 5) + 32;
}