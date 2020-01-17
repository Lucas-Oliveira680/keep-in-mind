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
        let matchedIndex = this.Notes.map(
        function (obj) { return obj.title; }).indexOf(title)
        this.Notes.splice(matchedIndex,1)
        this.notesChanged.emit(this.Notes.slice());
    }

    changeColor(color: string, title: string) {
        console.log(this.Notes)
        console.log('title searched', title)
        let matchedIndex = this.Notes.map(
        function (obj) { return obj.title; }).indexOf(title)
        this.Notes[matchedIndex].color = color
        this.notesChanged.emit(this.Notes.slice());
    }
    contentChange(title){
        let matchedIndex = this.Notes.map(
        function (obj) { return obj.title; }).indexOf(title)
        return this.Notes[matchedIndex].title
    }
    getNotes() {
        return this.Notes.slice()
    }
}
