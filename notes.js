console.log('starting notes.js');
const fs = require('fs');
var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (err) {
        return [];
    } 
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    console.log(`Adding note ${title} ${body}`);
    
    var notes = fetchNotes();

    var duplicateNotes = notes.filter((note) => note.title===title);

    if(duplicateNotes.length === 0) {
        var note = {
            title,
            body
        };
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes...');
    return fetchNotes();
};

var readNote = (title) => {
    console.log(`Reading note titled ${title}`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    console.log(`Removing note titled ${title}`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title!==title);
    return notes.length!==filteredNotes.length;
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

module.exports = {
    addNote : addNote,
    getAll,
    readNote,
    removeNote,
    logNote
}