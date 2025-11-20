//Importing shared module
import {sharedFunction} from './shared.js'

export function functionB() {
    console.log('Function B in Module B');
    sharedFunction('From Module B')
}