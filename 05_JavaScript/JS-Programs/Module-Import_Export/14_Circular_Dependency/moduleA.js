//Importing shared module
import {sharedFunction} from './shared.js'

export function functionA() {
    console.log('Function A in Module A');
    sharedFunction('From Module A')
}