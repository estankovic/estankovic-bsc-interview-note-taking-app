import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from '../../note.interface';
import { editNote, markNoteAsDone, markNoteAsTodo, openNotes } from '../../store/actions';
import { currentNote } from '../../store/selectors';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Observable<Note> = this.store.pipe(select(currentNote));

  constructor(readonly store: Store<any>) {}

  ngOnInit(): void {}

  goToNotes() {
    this.store.dispatch(openNotes());
  }

  toggleDoneStatus(event: { title: string; done: boolean }, note: Note) {
    if (event.done) {
      this.store.dispatch(markNoteAsDone({ id: note.id }));
    } else {
      this.store.dispatch(markNoteAsTodo({ id: note.id }));
    }
  }

  editNote(note: Note) {
    this.store.dispatch(editNote({ id: note.id }));
  }
}
