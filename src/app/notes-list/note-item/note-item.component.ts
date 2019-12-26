import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
@Input() note: Note;

@Output() noteRemoved = new EventEmitter<string>();

constructor() { }

onRemoveNote() {
  let text = (<HTMLTextAreaElement>document.getElementById("text")).value
  this.noteRemoved.emit(text)
  console.log(text)
  }

  onColorChange() {
    console.log('color changes to: Yellow')
  }
  
  ngOnInit() {
  }

}
