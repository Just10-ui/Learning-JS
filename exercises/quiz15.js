//!hard
//* Given an array of objects representing students with their scores, use foreach to print the names of students who scored above 80.

const students = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 82 },
  { name: "Charlie", score: 91 },
  { name: "Diana", score: 60 }
];

students.forEach(items => {
  if (items.score > 80) {
    console.log(items.name);
  };
});