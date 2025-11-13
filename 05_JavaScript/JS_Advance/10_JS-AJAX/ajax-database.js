//* AJAX Database
//AJAX can be used for interactive communication with a database. 
function showCustomer(str){
    if ( str == "") {
        document.getElementById('txthint').innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('txthint').innerHTML = this.responseText;
    }
    xhttp.open("GET", "getcustomer.php?q" + str);
    xhttp.send();
}