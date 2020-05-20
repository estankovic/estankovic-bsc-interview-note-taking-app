import { createAction, props } from '@ngrx/store';
import { Note } from '../note.interface';

export const markNoteAsDone = createAction(
  '[Notes] Mark note as done',
  props<{ id: number }>()
);
export const markNoteAsTodo = createAction(
  '[Notes] Mark note as to do',
  props<{ id: number }>()
);

export const openNote = createAction(
  '[Notes] Open note',
  props<{ id: number }>()
);

export const openNotes = createAction(
  '[Notes] Open notes',
);

export const editNote = createAction(
  '[Notes] Edit note',
  props<{ id: number }>()
);

export const editNoteSave = createAction(
  '[Notes] Edit note Save',
  props<{ note: Note }>()
);

export const loadNotes = createAction('[Notes] Load notes');
export const loadNotesSuccess = createAction(
  '[Notes] Load notes Success',
  props<{ notes: Note[] }>()
);
export const loadNotesFail = createAction(
  '[Notes] Load notes Fail',
  props<{ err: any }>()
);

export const getNote = createAction(
  '[Notes] Get note',
  props<{ id: number }>()
);
export const getNoteSuccess = createAction(
  '[Notes] Get note Success',
  props<{ note: Note }>()
);
export const getNoteFail = createAction(
  '[Notes] Get note Fail',
  props<{ err: any }>()
);

export const createNote = createAction(
  '[Notes] Create note',
  props<{ note: Note }>()
);
export const createNoteSuccess = createAction(
  '[Notes] Create Success',
  props<{ note: Note }>()
);
export const createNoteFail = createAction(
  '[Notes] Create note Fail',
  props<{ err: any }>()
);

export const updateNote = createAction(
  '[Notes] Update note',
  props<{ note: Partial<Note> }>()
);
export const updateNoteSuccess = createAction(
  '[Notes] Update note Success',
  props<{ note: Note }>()
);
export const updateNoteFail = createAction(
  '[Notes] Update note Fail',
  props<{ err: any }>()
);

export const removeNote = createAction(
  '[Notes] Remove note',
  props<{ note: Note }>()
);
export const removeNoteSuccess = createAction(
  '[Notes] Remove note Success',
  props<{ note: Note }>()
);
export const removeNoteFail = createAction(
  '[Notes] Remove note Fail',
  props<{ err: any }>()
);
