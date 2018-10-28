// var obj = {
//     name : 'Sourabh'
// };

// var jsonObj = JSON.stringify(obj);

/* console.log(typeof jsonObj);
console.log(jsonObj);

var personString = '{"name":"Sourabh","age":29}';
var obj = JSON.parse(personString);

console.log(typeof obj);
console.log(obj); */

const fs = require('fs');

var original = {
    title : "Some Title",
    body : "Some Body"
};

var originalNotesString = JSON.stringify(original);

fs.writeFileSync('notes.json', originalNotesString);
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);