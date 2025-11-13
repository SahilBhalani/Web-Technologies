//* AJAX XML
//AJAX can be used for interactive communication with an XML file.
function loadXML(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        myFunction(this);
    }
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
}

function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName('CD');
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" + x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById('tab1').innerHTML = table;
}

/**
 * * Example Explained
 * When a user clicks on the "Get CD info" button above, the loadXML() funtion is executed.
 * 
 * The loadXML() function creates an XMLHttpRequest object, adds the function to be executed when the server response is ready, and sends the request off to the server>
 * 
 * WHen the server response is ready, an HTML table is built, nodes (element) are extracted from the XML file, and it finally updates the element "demo" with the HTML table filled with XML data:
 */