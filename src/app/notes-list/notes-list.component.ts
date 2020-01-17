import { Component, OnInit } from '@angular/core';
import { Note } from './note-item/note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  providers: [NoteService]
})
export class NotesListComponent implements OnInit {
  Notes: Note[]
  newNoteTitle:string

  constructor(private noteService: NoteService) { }

  onAddNote() {
    this.newNoteTitle = (<HTMLInputElement>document.getElementById("input")).value;
    if(this.newNoteTitle !== '') {
      this.noteService.addNote(this.newNoteTitle);
      this.newNoteTitle = "";
      console.log(this.Notes + 'Note Added')
    } else {
      alert('Title Field is blank')
    }

  }

  ngOnInit() {
    this.Notes = this.noteService.getNotes();
    this.noteService.notesChanged.subscribe(
      (notes: Note[]) => {
        this.Notes = notes
      }
    );

  }


}
