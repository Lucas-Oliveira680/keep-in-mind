import { Note } from './note-item/note';
import { EventEmitter } from '@angular/core';

export class NoteService {
    notesChanged = new EventEmitter<Note[]>();

    private Notes: Note[] = [
        new Note('Yellow', '', '','')
    ];

    fetchByTitle(title) {
        let matchedIndex = this.Notes.map(
        function (obj) { return obj.title; }).indexOf(title)
        return matchedIndex
    }

    addNote(newNoteTitle) {
        this.Notes.push(new Note('Yellow', newNoteTitle, ''))
        this.notesChanged.emit(this.Notes.slice());
    }

    removeNote(title: string) {
        let index = this.fetchByTitle(title)
        this.Notes.splice(index,1)
        this.notesChanged.emit(this.Notes.slice());
    }

    changeColor(color: string, title: string) {
        let index = this.fetchByTitle(title)
        this.Notes[index].color = color
        this.notesChanged.emit(this.Notes.slice());
    }
    contentChange(title){
        let index = this.fetchByTitle(title)
        return this.Notes[index].title
    }
    getNotes() {
        return this.Notes.slice()
    }
}
