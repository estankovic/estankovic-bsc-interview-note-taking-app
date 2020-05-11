import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from '../../note.interface';
import { loadNotes, markNoteAsDone, markNoteAsTodo } from '../../store/actions';
import { notesListView } from '../../store/selectors';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes$: Observable<Note[]> = this.store.pipe(select(notesListView));

  constructor(readonly store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadNotes());
  }

  toggleDoneStatus(event: MatCheckboxChange, note: Note) {
    if (event.checked) {
      this.store.dispatch(markNoteAsDone({ id: note.id }));
    } else {
      this.store.dispatch(markNoteAsTodo({ id: note.id }));
    }
  }
}
