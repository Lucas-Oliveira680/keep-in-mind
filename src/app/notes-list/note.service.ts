import { Note } from './note-item/note';
import { EventEmitter } from '@angular/core';

export class NoteService {
    notesChanged = new EventEmitter<Note[]>();

    private Notes: Note[] = [];

    addNote(newNoteTitle) {
        this.Notes.push(new Note('Yellow', newNoteTitle, ''))
        this.notesChanged.emit(this.Notes.slice());
    }

    removeNote(title: string) {
        console.log(title)
        let matchedIndex = this.Notes.map(
        function (obj) { return obj.title; }).indexOf(title)
        this.Notes.splice(matchedIndex,1)

        this.notesChanged.emit(this.Notes.slice());
    }


    changeColor() {
        console.log('Color changed to ')
    }

    getNotes() {
        return this.Notes.slice()
    }
}
