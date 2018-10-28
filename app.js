console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const titleOptions = {
    describe    :   'Title of note',
    demand      :   true,
    alias       :   't'
};

const bodyOptions = {
    describe    :   'Body of the note',
    demand      :   true,
    alias       :   'b'
};

const argv = yargs
    .command('add','Add a new title', {
        title : titleOptions,
        body : bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title : titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

console.log('Process Argv: ' , process.argv);
console.log('Yargs argv : ' , argv);

var command = process.argv[2];
console.log(command);

if(command==='add') {
    console.log('adding new note');
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        notes.logNote(note);
    } else {
        console.log('Note Already Exists!');
    }
} else if(command === 'list') {
    console.log('listing all notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    console.log('reading all notes');
    var note = notes.readNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if(command === 'remove'){
    console.log('removing all notes');
    var noteRemoved = notes.removeNote(argv.title);
    var message = (noteRemoved ? 'Note was removed' : 'Note not found');
    console.log(message);
} else {
    console.log('command not recognized')
}