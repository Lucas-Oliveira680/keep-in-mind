import { Note } from './note-item/note';
import { EventEmitter } from '@angular/core';

export class NoteService {
    notesChanged = new EventEmitter<Note[]>();

    private Notes: Note[] = [
        new Note('Yellow', '', '')
    ];

    addNote(newNoteTitle) {
        this.Notes.push (new Note('Yellow', newNoteTitle, ''))
        this.notesChanged.emit(this.Notes.slice());
    }

    removeNote(i) {
        this.Notes.splice(i,1)
        this.notesChanged.emit(this.Notes.slice());
        console.log('note removed')
    }

    changeColor(i) {
        console.log('Color changed to ')
    }
    getNotes() {
       return this.Notes.slice()
    }
}