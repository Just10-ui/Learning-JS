const A = new Set(['a', 'b', 'c']);
const B = new Set(['d', 'c', 'b']);

//* The union() method returns the union of two sets.
console.log(A.union(B)); //output Set(4) { 'a', 'b', 'c', 'd' }

//* The intersection() method returns the intersection of two sets.
console.log(A.intersection(B)); //output Set(2) { 'b', 'c' }

//* The difference() method returns the difference between two sets.
console.log(A.difference(B)); //output Set(1) { 'a' }

//* The symmetricDifference() method returns the symmetric difference between to sets.
console.log(A.symmetricDifference(B)); //output Set(2) { 'a', 'd' }

//* The isSubsetOf() method returns true if all elements in this set is also elements in the argument set:
console.log(A.isSubsetOf(B)); //output false

//* The isSupersetOf() method returns true if all elements in the argument set are also in this set:
console.log(A.isSupersetOf(B)); //output false

//* The isDisjointFrom() method returns true if this set has no elements in common with the argument set:
console.log(A.isDisjointFrom(B)); //output false