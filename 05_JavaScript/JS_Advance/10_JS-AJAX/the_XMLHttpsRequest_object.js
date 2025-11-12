//* AJAX - The XMLHttpRequest Object
/**
 * The keystone of AJAX is the XMLHttpRequest object.
 * 
 * 1. Create an XMLHttpRequest object
 * 2. Define a callback function
 * 3. Open the XMLHttpRequest object
 * 4. Send a Request to a server
 */

//* The XMLHttpRequest Object
// All modern browsers support the XMLHttpRequest object.
//The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. this means that it is possible to update parts of a web page, without reloading the whole page.

//* Create an XMLHttpRequest Object
// All modern browsers have a built-in XMLHttpRequest object.
//Syntaxing for creating an XMLHttpRequest object:
// variable = new XMLHttpRequest();

//* Define a Callback Function
//A callback function is a function passed as a parameter to another function
//In this case, the callback function should contain the code to execute when the response is ready.
/**
 * xhttp.onload = function() {
 *   ///What to do when the response is ready
 * }
 */

//* Send a Request
//To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object:
/**
 * xhttp.open("GET", "ajax_info.txt");
 * xhttp.send();
 */

//* XMLHttpRequest Object Methods
/**
 * Method                   Description
 * new XMLHttpRequest()     Create a new XMLHttpsRequest object
 * abort()                  cancels the current request
 * getAllResponseHeaders()  Returns header information
 * getResponseHeader()      Returns specific header information
 * open(method, url, async, Specifies the request
 * user,psw)                
 *                          method: the request type GET or POST
 *                          url: the file location
 *                          async: true(asynchronous) or false()                         user: optional user name
 *                          psw: optional password
 * 
 * send()                   sends the request to the server
 *                          Used for GET requests    
 * send(string)             Sends the request to the  server 
 *                          Used for Post requests.                        
 * setRequestHeader()       Adds a label/value pair to the header to be sent               
 */

//* XMLHttpRequest Object Properties
/**
 * Property                 Description
 * onload                   Defines a function to be called when the request is received(loaded)
 * onreadystatechange       Defines a function to be called when the readyState property changes
 * readyState
 * responseText             Returns the response data as a string
 * responseXML              Returns the response data as XML data
 * status                   Returns the status-number of a request
 *                          200: "OK"
 *                          403: "Forbidden"
 *                          404: "Not Found"
 * statusText               Returns the status-text(e.g "OK" or "NOT Found")    
 */

//* Multiple Callback Functions
//If you have more than one AJAX task in a website, you should create one function for executing the XMLHttpRequest object, and one function for executing the XMLHttpRequest object, and one callback function for each AJAX task.
