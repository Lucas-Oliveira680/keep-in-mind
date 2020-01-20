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

  
  colorChangeToggle: boolean = false;

  constructor(private noteService: NoteService) { }

  
  onRemoveNote() {
    this.noteService.removeNote(this.title)
  }

  onColorSelected(color) {
    switch (color) {
      case 'Yellow': color = '#ffff00';
        break;
      case 'Pink': color = '#ffb6c1';
        break;
      case 'Blue': color = '#add8e6';
        break;
      case 'Green': color = '#90ee90';
        break;
    }
    this.noteService.changeColor(color, this.title);
    this.colorChangeToggle = false;
  }

  onColorChange() {
    if (this.colorChangeToggle !== true) {
      this.colorChangeToggle = true;
    } else {
      this.colorChangeToggle = false;
    }
  }

  onContentChange(title) {
    this.title = this.noteService.contentChange(title)
  }
  // teste(){
  //  let notes = this.noteService.getNotes()
  //  console.log(notes)
  // }
}
