async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error: ", error);
    }
}

fetchData();