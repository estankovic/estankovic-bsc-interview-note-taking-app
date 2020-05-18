import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { NotesService } from '../notes.service';
import {
  createNote,
  createNoteFail,
  createNoteSuccess,
  getNote,
  getNoteFail,
  getNoteSuccess,
  loadNotes,
  loadNotesFail,
  loadNotesSuccess,
  markNoteAsDone,
  markNoteAsTodo,
  openNote,
  openNotes,
  removeNote,
  removeNoteFail,
  removeNoteSuccess,
  updateNote,
  updateNoteFail,
  updateNoteSuccess
} from './actions';

const ANIMATION_DELAY = 250;

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

  getNote = createEffect(() =>
    this.actions.pipe(
      ofType(getNote),
      switchMap(({ id }) =>
        this.service.getNote(id).pipe(
          map(note => getNoteSuccess({ note })),
          catchError(err => of(getNoteFail({ err })))
        )
      )
    )
  );

  getNoteFail = createEffect(
    () =>
      this.actions.pipe(
        ofType(getNoteFail),
        tap(({ err }) => {
          this.router.navigate(['notes']);
        })
      ),
    { dispatch: false }
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
      delay(ANIMATION_DELAY),
      map(({ id }) => updateNote({ note: { id, done: false } }))
    )
  );

  markNoteAsDone = createEffect(() =>
    this.actions.pipe(
      ofType(markNoteAsDone),
      delay(ANIMATION_DELAY),
      map(({ id }) => updateNote({ note: { id, done: true } }))
    )
  );

  openNote = createEffect(
    () =>
      this.actions.pipe(
        ofType(openNote),
        delay(ANIMATION_DELAY),
        tap(({ id }) => {
          this.router.navigate(['notes', id]);
        })
      ),
    { dispatch: false }
  );

  openNotes = createEffect(
    () =>
      this.actions.pipe(
        ofType(openNotes),
        delay(ANIMATION_DELAY),
        tap(_ => {
          this.router.navigate(['notes']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions: Actions,
    private readonly service: NotesService,
    private readonly router: Router
  ) {}
}
