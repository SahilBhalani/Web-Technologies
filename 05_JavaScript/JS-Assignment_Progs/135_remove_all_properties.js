let obj = {
    name: "Sahil",
    age: 30,
    city: "Surat",
    hobby: null,
    state: ""
}

for(let key in obj){
    if(obj[key] === null || obj[key] === ""){
        delete obj[key];
    }
}
console.log(obj);