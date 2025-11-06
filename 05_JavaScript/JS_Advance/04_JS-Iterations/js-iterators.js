//* JavaScript Iterators
/**
 * * The Iterator Object
 * An Itrator is an Object That provides a standard way to access elements sequentially
 * An iterator must adheres to the Iterator Protocols : It must have a next() method.
 */

//* The Iterator.from() Method
//The Iterator.from() creates an iterator object from an existing iterable or iterator object.
{
    //Create an Iterator
    const myIterator = Iterator.from([1,2,3]);

    //Iterate over the elements
    let text = "";
    for ( const x of myIterator) {
        text += x + "\n";
    }
    console.log(text);
}

//* The filter() Method
//The filter() method returns a new iterator containing elements that satisfy a filter function.
{
    //Create an Iterator
    const myIterator = Iterator.from([32,33,16,40]);

    //Filter the iterator
    const filteredIterator = myIterator.filter(x => x > 18);

    //Iterate over the filtered elements
    let text = "";
    for (const x of filteredIterator){
        text += x + "\n";
    }
    console.log(text);
}

//* The map() Method
// The map() method returns a new iterator with all elements transformed by a map function.
{
    // Create an iterator
    const myIterator = Iterator.from("123456789");

    //now you can use the map method
    const mappedIterator = myIterator.map(x => x * 2);

    //Iterate over the Mapped elements
    let text = ""
    for(const x of mappedIterator) {
        text += x + "\n"
    }
    console.log(text);
}

//* The flatMap() Method
//The flatMap() method returns a new iterator by mapping each element and then flattening the result into a single iterator.
{
    // Create an Iterator
    const myIterator = Iterator.from([1,2,3,4,5,6,7,8,9]);

    //Map the Iterator
    const mappedIterator = myIterator.flatMap(x => [x,x * 10]);

    //Iterate over the Mapped elements
    let text = ""
    for(const x of mappedIterator) {
        text += x + "\n"
    }
    console.log(text);
}

//* The take() Method
// The take() method returns a new iterator that yields at most a specified number of elements.
{
    //Create an Iterator
    const myIterator = Iterator.from([1,2,3,4,5,6,7,8]);

    //Take the first five elements
    const firstFive = myIterator.take(5);

    //Iterate over first five elements
    let text = ""
    for(const x of firstFive) {
        text += x + "\n";
    }
    console.log(text);
}

//* The drop() Method
//The drop() method returns a new iterator that skips a specified number of elements before yielding the rest.
{
    //Create an Iterator
    const myIterator = Iterator.from([1,2,3,4,5,6,7]);

    //Remove first five elements
    const firstFive = myIterator.drop(5);

    //Iterate over remaining elements
    let text = "";
    for(const x of firstFive) {
        text += x + '\n';
    }
    console.log(text);
}

//* The find() Method
//The find(fn) method returns the first element that satisfies a test function
{
    //Create an Iterator
    const myIterator = Iterator.from([3,10,18,30,20]);

    //find first greater than 18
    let result = myIterator.find(x => x > 18);
    console.log(result);
}

//* The reduce() Method
//The reduce() method applies a reducer fuction against an accumulator and each element to reduce it to a single value.
{
  //Create an Iterator
  const myIterator = Iterator.from([175,50,25]);
  
  function myFunc(total, num) {
    return total + num;
  }

  //Reduce the Iterator
  let result = myIterator.reduce(myFunc);
  console.log("The sum of all items is: " + result);
}

//* The every() Method
//The every(fn) method returns true if all elements in the iterator satisfy the provided test function
{
    //Create an Iterator
    const myIterator = Iterator.from("123456789");

    //Is every element greater than 7?
    let result = myIterator.every(x => x > 7);
    console.log(result);
}

//* The some() Method
//The some() method returns true if at least one element in the iterator satisfies the provided test function.
{
    //Create an Iterator
    const myIterator = Iterator.from("123456789");

    //Is some element greater than 7>
    let result = myIterator.some(x => x > 7);
    console.log(result);
}

//* The forEach() Method
//The forEach() method executes a provided function once for each elements in the iterator.
{
    //Create an Iterator
    const myIterator = Iterator.from("123456789");

    //Iterates over all elements
    let text = "";
    myIterator.forEach(x => text += x);
    console.log(text);
}