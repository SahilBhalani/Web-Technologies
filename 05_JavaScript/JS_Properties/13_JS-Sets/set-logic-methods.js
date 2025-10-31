//* JavaScript Set Logic
/**
 * Logic Methods
 * In JavaScript 2025, 7 new logical methods were added to Set object:
 * ~ union()
 * ~ diffrence()
 * ~ intersection()
 * ~ isDisjointFrom()
 * ~ isSubsetOf()
 * ~ isSupersetOf()
 * ~ symmetricDifference()
 */

//* The union() Method
//The union() method returns the union of two sets..
//The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both:
{
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    const C = A.union(B);
    console.log(C);
}

//* The intersection() Method
//The intersection() method returns the intersection of two sets.
//The intersection() method returns a new set containing the element which are in this set and in the argument set:
{
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    const C = A.intersection(B);
    console.log(C);
}

//* The difference() Method
//The diffrence() method returns the diffrence between two sets.
//The diffrence() method returns a new set containing which are in this set but not in the arguments set:
{
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    const C = A.difference(B);
    console.log(C);
}

//* The symmetricDifference() Method
//The symmetricDifference() method returns the symmetric difference between two sets.
//The symmetricDifference() method returns a new set containing elements which are in the set or in the argument set, but not in both:
{
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    const C = A.symmetricDifference(B);
    console.log(C);
}

//* The isSubsetOf() Method
//The isSubsetOf() method returns true if all elements in this set is also elements in the argument set:
{
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    let answer = A.isSubsetOf(B);
    console.log(answer);
}

//* The isSupersetOf() Method
//The isSupersetOf() method returns true if all elements in the argument set are also in this set:
{
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    let answer = A.isSupersetOf(B);
    console.log(answer);
}

//* The isDisjointFrom() Method
//The isDisjointFrom() method return true if this set has no elements in common with the argument set:
{
    const A = new Set(['a','b','c']);
    const B = new Set(['z','x','y']);

    let answer = A.isDisjointFrom(B);
    console.log(answer);
}