import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor() { }

  @Output() noteCreated = new EventEmitter<{ color: string, title: string, text: string }>();

  newNoteColor: string = 'Yellow';
  newNoteTitle: string = ''
  newNoteText: string = '';

  onAddNote() {
    this.newNoteTitle = (<HTMLInputElement>document.getElementById("input")).value;
    this.noteCreated.emit({
      color: this.newNoteColor,
      title: this.newNoteTitle,
      text: this.newNoteText
    });
    this.newNoteTitle = '';
  }

  ngOnInit() {
  }

}
