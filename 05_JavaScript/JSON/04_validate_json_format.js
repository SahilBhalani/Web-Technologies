const text = `{"title: "javaScript", "rating": 4.5}`;

try {
    const result = JSON.parse(text);
    console.log("Valid JSON: " , result);
} catch (error) {
    console.log("Invalid JSON");
}