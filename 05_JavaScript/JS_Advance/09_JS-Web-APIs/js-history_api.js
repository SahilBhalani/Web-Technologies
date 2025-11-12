// * Web History API
// The Web History API provides easy methods to access the window.history object.
// The window.history object contains the URLs(Web Sites) visited by the user.

//* The History back() Methods
//The back() method loads the previous URL in the windows.history list.
//It is the same as clicking the "back arrow" in your browser.
function hisback() {
    window.history.back();
}


//* The History go() Method
//The go() method loads a specific URL from the history list:

function hisgo() {
    window.history.go(-2);
}

//* History Object Properties
//length - returns the number of URLs in the history list

//* History Object Methods
//back() - loads the previous URL in the history list
//forward()- loads the next URL in the history list
//go() - loads a specific URL from the history list