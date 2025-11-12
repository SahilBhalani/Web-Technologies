//* Fetch API
//The Fetch API Interface allows web browsers to make HTTP requests to web servers. No nedd for XMLHttpRequest anymore.

// * A Fetch API Example
//The example below fetches a file and displays the content:
let file = "fetch_info.txt"

fetch(file)
.then(x => x.text())
.then(y =>
    document.getElementById('ftch').innerHTML = y
);

//Since Fetch is based on async and await, the example above might be easier to understand like this:
getText("fetch_info.txt");

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();

    document.getElementById('ftch2').innerHTML = myText;
}
