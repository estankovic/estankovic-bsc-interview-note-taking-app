import { createAction, props } from '@ngrx/store';
import { Note } from '../note.interface';

export const loadNotes = createAction('[Notes] Load notes');
export const loadNotesSuccess = createAction(
  '[Notes] Load notes Success',
  props<{ notes: Note[] }>()
);
export const loadNotesFail = createAction(
  '[Notes] Load notes Fail',
  props<{ err: any }>()
);

export const createNote = createAction('[Notes] Create note');
export const createNoteSuccess = createAction(
  '[Notes] Create Success',
  props<{ note: Note }>()
);
export const createNoteFail = createAction(
  '[Notes] Create note Fail',
  props<{ err: any }>()
);

export const updateNote = createAction('[Notes] Update note');
export const updateNoteSuccess = createAction(
  '[Notes] Update note Success',
  props<{ note: Note }>()
);
export const updateNoteFail = createAction(
  '[Notes] Update note Fail',
  props<{ err: any }>()
);

export const removeNote = createAction('[Notes] Remove note');
export const removeNoteSuccess = createAction(
  '[Notes] Remove note Success',
  props<{ note: Note }>()
);
export const removeNoteFail = createAction(
  '[Notes] Remove note Fail',
  props<{ err: any }>()
);
