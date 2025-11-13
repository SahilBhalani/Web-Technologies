//* AJAX - XMLHttpRequest
//The XMLHttpRequest object is used to request data from a server.

//* Send a Request To a Server
//To send a request to a server, we use the open() and send() methods of the XMLHttpRequest Object
/**
 * xhttps.open("GET", "ajax_info.txt", true);
 * xhttps.send();
 */

//* The url - A File On a Server
//The url parameter of the open() method, is an address to a file on a server:
// xhttp.open("GET", "ajax_test.asp", true);

//The file can be anny kind of file, like .txt and .xml, or server scriptiong files like .asp and .php 

//* Asynchronous - True or False?
//Server request should be sent asynchronously
//The async parameter of the open() method should be set to true:
// xhttp.open("GET",ajax_test.asp, true); 

//By Sending asynchronously. the JavaScript does not have to wait for the server response, but can instead:
//Execute other scripts while waiting for server response
//Deal with the response after the response is ready

//* GET or POST?
//GET is simpler and faster than post, and can be used in most cases.
//However, always use POST requests when:
/**
 * A cached file is not an option (update a file or database on the server).
 * Sending a large amount of data to the server (POST has no size limitations).
 * Sending user input (which can contain unknown characters), POST is more robust and secure than GET. 
 */

// * GET Requests
// A simple GET request:
{  
    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            document.getElementById('d1').innerHTML = this.responseText;
        }
        xhttp.open("GET", 'demo_get.txt?fname=sahil&lname=Bhalani' + Math.random());
        xhttp.send();
    }
}

//* POST Requests
//A simple POST request:
{
    function loadPost() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            document.getElementById('d2').innerHTML = this.responseText;
        }
        xhttp.open("POST", 'demo_post.asp');
        //To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhttp.send("fname=Henry&lname=Ford");
    }
}

//* Synchronous Request
//To execute a synchronous request, changes the third parameter in the open() method to false
//Sometimes async = false are used for quick testing. You will also find synchronous requests in older JavaScript code.
//Since the code will wait for server completion, there is no need for an onreadystatechange function:
{
    function loadsync() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "ajax_info.txt", false);
        xhttp.send();

        document.getElementById('d3').innerHTML = xhttp.responseText;
    }
}
