//* Finding HTML Element by Id
//Return the element with id="id01"
$(document).ready(function() {
    var myElements = $("#id01");
    $("demo").text("The text from the id01 paragraph is: " + 
        myElements[0].innerHTML
    );
});