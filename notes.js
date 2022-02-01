const fs = require('fs')
const chalkUtil = require('chalk')

const readNote = (title) => {
    const targetNote = loadNotes().find((note) => note.title === title)
    if (targetNote) {
        console.log(chalkUtil.blueBright.inverse(JSON.stringify(targetNote)))
    } else {
        console.log(chalkUtil.red.inverse('Note ' + title + ' not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalkUtil.blueBright('Your notes:'))
    notes.forEach((note) => {
        console.log(chalkUtil.blueBright.inverse(note.title))
    })
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalkUtil.green.inverse('New note added!'))
    } else {
        console.log(chalkUtil.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)
    if (notes.length > updatedNotes.length) {
        saveNotes(updatedNotes)
        console.log(chalkUtil.green.inverse('Note ' + title + ' removed!'))
    } else {
        console.log(chalkUtil.red.inverse('Title ' + title + ' not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
