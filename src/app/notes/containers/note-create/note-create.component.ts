import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Note } from '../../note.interface';
import { createNote, openNotes } from '../../store/actions';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {
  nextNote: Note = {
    done: false,
    title: ''
  };

  constructor(readonly store: Store<any>) {}

  ngOnInit(): void {}

  noteChange(note: Note) {
    this.nextNote = note;
  }

  close(): void {
    this.store.dispatch(openNotes());
  }

  save(): void {
    this.store.dispatch(createNote({ note: this.nextNote }));
  }
}
