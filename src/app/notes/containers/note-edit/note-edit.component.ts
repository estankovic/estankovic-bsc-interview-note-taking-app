import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from '../../note.interface';
import { currentNote } from '../../store/selectors';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  note: Observable<Note> = this.store.pipe(select(currentNote));


  constructor(readonly store: Store<any>) {}


  ngOnInit(): void {
  }

  close(): void {

  }

  save(): void {

  }

}
