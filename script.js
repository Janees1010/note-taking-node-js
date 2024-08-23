const yargs = require('yargs');
// const fs = require('fs');
// const path = 'notes.json';
const { add_note, read_notes, remove_note, list_notes, list_one_note } = require('./app');

// Command to add a new note
yargs.command({
    command: 'add',
    describe: 'Add a new item',
    builder: {
        title: {
            describe: 'Title of the item',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the item',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        let obj = { title: argv.title, body: argv.body };
        console.log("New note to be added:", obj);

        let notes = read_notes();
        notes.push(obj);
        add_note(notes);
    }
});

// Command to remove a note by title
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the item',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        remove_note(argv.title);
    }
});

// Command to list all notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        list_notes();
    }
});

// Command to list a specific note by title
yargs.command({
    command: 'listone',
    describe: 'List a specific note by title',
    builder: {
        title: {
            describe: 'Title of the item',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        list_one_note(argv.title);
    }
});

// Parse the arguments
yargs.parse();
