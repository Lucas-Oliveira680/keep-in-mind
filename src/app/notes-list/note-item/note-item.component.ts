import { Component, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from './note';


@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})

export class NoteItemComponent {
  @Input() note: Note;
  title = (<HTMLInputElement>document.getElementById("input")).value;

  constructor(private noteService: NoteService) { }

  
  onRemoveNote() {
    this.noteService.removeNote(this.title)
    console.log(`The note ${this.title} was removed`)
  }

  onColorChange(i) {

  }

}
