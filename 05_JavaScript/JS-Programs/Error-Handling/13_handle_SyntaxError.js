//* Handle SyntaxError for JSON Parsing
function parse_JSON(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    console.log("Parsed data: ", parsedData);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("SyntaxError: ", error.message);
    } else {
      console.log("Error: ", error.message);
    }
  }
}

//ex.
parse_JSON('{"name": "John Doe", "age":30}');
parse_JSON('{"name": "John Doe", "age":30,}');
