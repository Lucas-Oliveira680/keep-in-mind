import { Component, OnInit } from '@angular/core';
import { Note } from './note-item/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  Notes: Note [] = [
    new Note ('Yellow', '', '')
  ];

  onNoteAdded(noteCreated) {
    this.Notes.push(noteCreated);
    console.log(this.Notes)
  }

  onNoteRemoved(text) {
    this.Notes.splice(text, 1);
    console.log('note removed')
  }

  ngOnInit() {
  }

}
