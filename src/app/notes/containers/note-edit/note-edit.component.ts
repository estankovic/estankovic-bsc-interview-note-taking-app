import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from '../../note.interface';
import { editNoteSave, openNote } from '../../store/actions';
import { currentNote } from '../../store/selectors';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  note: Observable<Note> = this.store.pipe(
    select(currentNote),
    tap(note => this.noteChange(note))
  );

  private nextNote: Note;

  constructor(readonly store: Store<any>) {}

  ngOnInit(): void {}

  noteChange(note: Note) {
    this.nextNote = note;
  }

  close(note: Note): void {
    this.store.dispatch(openNote({ id: note.id }));
  }

  save(): void {
    this.store.dispatch(editNoteSave({ note: this.nextNote }));
  }
}
