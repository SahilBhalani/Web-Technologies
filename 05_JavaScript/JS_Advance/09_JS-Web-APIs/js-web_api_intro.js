// * What is Web API?
/**
 * API stands for Application Programming Interface
 * A Web API is an application programming interface for the Web.
 * A browser API can extend the functionality of a web browser
 * A Server API can extends the functionality of a web server
 */

//* Browser APIs
// All browsers have a set of built-in Web-APIs to support complex operations, and to help accesing data.
//For example, the Geolocation API can return the coordinates of where the browser is located.
{
  //Get the latitude and longitude of the user's position:
  const myElement = document.getElementById("demo1");

  function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition(showPosition);
    } catch (err) {
      myElement.innerHTML = err;
    }
  }

  function showPosition(position) {
    myElement.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }
}

//* Third Party APIs
//Third party APIs are not built into your browser.
//To use these APIs , you will have to download the code from the Web.
