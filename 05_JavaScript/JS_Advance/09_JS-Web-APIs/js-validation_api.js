//* Validation API
/**
 * Constraint Validations DOM Methods
 * Property             Description
 * checkValidity()      Returns true if an input element contains valid data.
 * setCustomValidity()  Sets the validationMessage Property of an input element
 */

//* The checkValidity() Method
{
    function myFunction() {
        const inObj = document.getElementById('id1');

        if(!inObj.checkValidity()) {
            document.getElementById('p1').innerHTML = inObj.validationMessage;
        } else {
            document.getElementById('p1').innerHTML = "Input OK";
        }
    }
}

/**
 * ? Constrains Validation DOM Properties
 * Property           Description  
 * validity           Contains boolean properties related to the validity of an input element.
 * validationMessage  Contains the message a browser will display when the validity is false.
 * willValidate       Indicates if an input element will be validated.            
 */

/**
 * ? Validity Properties
 * Property         Description
 * customError      true, if a custom validity message is set
 * patternMismatch  true, if an element's value does not match its pattern attribute
 * rangeOverflow    true, if an element's value is greater than its max attribute
 * rangeUnderflow   true, if an element's value is less than its min attribute
 * stepMismatch     true, if an element's value is invalid per its step attribute
 * tooLong          true. if an element's value exceeds its maximum length
 * typeMismatch     true, if an element's value is invalid per its type attribute
 * valueMissing     true, if an element(with a required attribute) has no value
 * valid            true, if an element's value is valid            
 */

//* The rangeOverflow Property
function myFunc() {
    let text = "";
    if(document.getElementById('id2').validity.rangeOverflow) {
        text = "Value too large"
    } else {
        text = "Input OK"
    }
    document.getElementById('p2').innerHTML = text;
}

//* The rangeUnderflow Property
function myFunction2() {
    let text = "";
    if(document.getElementById("id3").validity.rangeUnderflow){
        text = "Value too small";
    } else {
        text = "Input OK!"
    }
    document.getElementById('p3').innerHTML = text;
}