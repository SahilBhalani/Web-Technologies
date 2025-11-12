//* Web Storage APIs
//The Web Storage Api is a simple syntax for storing annd retrieving data in the browser. It is very easy to use:
localStorage.setItem("name", "Sahil Bhalani");
document.getElementById('ls1').innerHTML = localStorage.getItem("name");

//* The localStorage Object
/**
 * The localStorage object provides access to a local storage for a perticular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
 * The data is stored with no expiration date , and will not be deleted when the browser us closed.
 * The data will be available for days, weeks,  and years.
 */

//* The sessionStorage Object
//The sessionStorage object is identical to the localStorage object.
//The difference is that the sessionStorage object stores data for one session.
//The data is deleted when the browser is closed.
sessionStorage.setItem("name", "Sahil Patel");
document.getElementById('demo').innerHTML = sessionStorage.getItem("name");

// * Storage Object Properties and Methods
/**
 * key(n) - Returns the name of the nth key in the storage
 * length - Returns the number of data items stored in the storage object
 * getItem(keyname) - Returns the value of the specified key name
 * setItem(keyname,value) - Adds a key to the storage, or updates a key value(if it already exists)
 * remove(keyname) - Remove that key from the storage
 * clear() - Empty all key out of the storage
 */ 

//* Related Pages for Web storage API
/**
 * windows.localStorage - Allows to save key-value pairs in a web browser. stores the data with no expiration date
 * window.sessionStorage - Allows to save key/value pairs in a web browser. Stores the data for one session.
 */