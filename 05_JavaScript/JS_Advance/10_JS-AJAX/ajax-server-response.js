//* AJAX - Server Response
//Server Response Properties
/**
 * Property         Description
 * responseText     get the response data as a string
 * responseXML      get the response data as XML data
 */

//* The responseText Property
//The responseText property returns the server response as a JavaScript string, and you can use it accordingly..

//* THe responseXML Property
//The XMLHttpRequest object has an in-built XML parser.
//The responseXML property returns the server response as an XML DOM object.
//Using this property you can parse the response as an XML DOM object:
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = this.responseXML;
        const x = xmlDoc.getElementsByTagName("ARTIST");
        let txt = "";
        for (let i = 0; i < x.length; i++) {
            txt = txt + x[i].childNodes[0].nodeValue + "<br>"
        }
        document.getElementById('pp1').innerHTML = txt;
    }
    xhttp.open("GET","cd_catalog.xml");
    xhttp.send();
}

//* Server Response Methods
/**
 * Method                   Description
 * getResponseHeader        Returns specific header information from the server resources
 * getAllResponseHeaders()  Returns all the header information from the server resource
 */

//* The getAllResponseHeaders() Methods
//The getAllResponseHeaders() method returns all header information from the server response.
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('pp2').innerHTML = this.getAllResponseHeaders();
    }
    xhttp.open("GET", "ajax.info.txt");
    xhttp.send();
}

//* The getResponseHeader() Methods
// The getResponseHeader() method returns specific header information from the server response.
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('pp3').innerHTML = this.getResponseHeader("Last-Modified");
    }
    xhttp.open("GET","ajax_info.txt");
    xhttp.send();
}
