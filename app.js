// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'Test tutorial 1')
// fs.appendFileSync('notes.txt', 'append test')
// console.log('ok!')

// const add = require('./utils.js');
// const sum = add(4, -2)
// console.log(sum)

// const validator = require('validator')
// const getNotes = require('./notes')
// console.log(getNotes())

// console.log(validator.isEmail('maeto@example.com'))
// console.log(validator.isEmail('not@Email'))

// const chalk = require('chalk')
// const name = process.argv[2]

// console.log(chalk.blueBright.bgRed.bold('Sucess %s'), name)
// console.log(chalk.magenta('Sucess %s'), name)
// console.log(chalk.cyan('Sucess %s'), name)
// console.log(chalk.greenBright.bgBlack.bold('Sucess %s'), name)
// console.log(chalk.yellowBright.bgWhite('Sucess %s'), name)
// console.log(chalk.blue('Sucess %s'), name)
// console.log(chalk.bgRed.bold('Error'))
// console.log(chalk.bgGreenBright.black.bold('OK!'))

// const chalk = require('chalk')
// const getNotes = require('./notes.js')
// const yargs = require('yargs')

// const command = process.argv[2]

// if (command === 'add') {
//     console.log(chalk.green('adding note...'))
// } else if (command === 'remove') {
//     console.log(chalk.green('removing note...'))
// } else {
//     console.log(chalk.red('command not found!'))
// }

/**
 *  chalk and require npm packages, import of other files (notes.js)
 *  yargs -> parsing of cmd args
 *  chalk -> console message colors
 *
 *  nodemon -> installed globally
 */
// const chalk = require('chalk')
// const getNotes = require('./notes.js')
// const yargs = require('yargs')

// // console.log(process.argv)
// /* customize yargs version */
// // yargs.version('1.1.0')

// /** Create add command */
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv) {
//         console.log('Title: ' + argv.title)
//         console.log('Body: ' + argv.body)
//     }
// })

// /**  Create remove command */
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function() {
//         console.log('Removing a note!')
//     }
// })

// /** Create read command */
// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function() {
//         console.log('Reading a note!')
//     }
// })

// /** Create read command */
// yargs.command({
//     command: 'list',
//     describe: 'List a note',
//     handler: function() {
//         console.log('Listing all notes!')
//     }
// })

// // console.log(yargs.argv)
// yargs.parse()

const chalkUtil = require('chalk')
const yargs = require('yargs')
const notesUtil = require('./notes')

console.log(chalkUtil.green('app.js START'))

/** Create add command */
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.addNote(argv.title, argv.body)
    }
})

/**  Create remove command */
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.removeNote(argv.title)
    }
})

/** Create read command */
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.readNote(argv.title)
    }
})

/** Create read command */
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        notesUtil.listNotes()
    }
})

yargs.parse()
console.log(chalkUtil.green('app.js END'))
