import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NotesService } from '../notes.service';
import {
  createNote,
  createNoteFail,
  createNoteSuccess,
  loadNotes,
  loadNotesFail,
  loadNotesSuccess,
  markNoteAsDone,
  markNoteAsTodo,
  removeNote,
  removeNoteFail,
  removeNoteSuccess,
  updateNote,
  updateNoteFail,
  updateNoteSuccess
} from './actions';

@Injectable()
export class NoteEffects {
  loadNotes = createEffect(() =>
    this.actions.pipe(
      ofType(loadNotes),
      switchMap(_ =>
        this.service.getNotes().pipe(
          map(notes => loadNotesSuccess({ notes })),
          catchError(err => of(loadNotesFail({ err })))
        )
      )
    )
  );

  createNote = createEffect(() =>
    this.actions.pipe(
      ofType(createNote),
      switchMap(({ note }) =>
        this.service.createNote(note).pipe(
          map(response => createNoteSuccess({ note: response })),
          catchError(err => of(createNoteFail({ err })))
        )
      )
    )
  );

  updateNote = createEffect(() =>
    this.actions.pipe(
      ofType(updateNote),
      switchMap(({ note }) =>
        this.service.updateNote(note.id, note).pipe(
          map(response => updateNoteSuccess({ note: response })),
          catchError(err => of(updateNoteFail({ err })))
        )
      )
    )
  );

  removeNote = createEffect(() =>
    this.actions.pipe(
      ofType(removeNote),
      switchMap(({ note }) =>
        this.service.removeNote(note.id).pipe(
          map(response => removeNoteSuccess({ note: response })),
          catchError(err => of(removeNoteFail({ err })))
        )
      )
    )
  );

  markNoteAsTodo = createEffect(() =>
    this.actions.pipe(
      ofType(markNoteAsTodo),
      map(({ id }) => updateNote({ note: { id, done: false } }))
    )
  );

  markNoteAsDone = createEffect(() =>
    this.actions.pipe(
      ofType(markNoteAsDone),
      map(({ id }) => updateNote({ note: { id, done: true } }))
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly service: NotesService
  ) {}
}
