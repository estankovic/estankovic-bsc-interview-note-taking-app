import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Note } from '../note.interface';
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
  removeNote,
  removeNoteFail,
  removeNoteSuccess,
  updateNote,
  updateNoteFail,
  updateNoteSuccess
} from './actions';

export const noteAdapter = createEntityAdapter<Note>();

export interface NotesState {
  data: EntityState<Note>;
  list: number[];
  loaded: boolean;
  loading: boolean;
}

const initState: NotesState = {
  data: noteAdapter.getInitialState(),
  list: [],
  loaded: false,
  loading: false
};

const reducer = createReducer(
  initState,
  // LOAD
  on(loadNotes, state => {
    return { ...state, loading: true };
  }),
  on(loadNotesSuccess, (state, { notes }) => {
    return {
      ...state,
      data: noteAdapter.upsertMany(notes, state.data),
      list: notes.map(note => note.id),
      loading: false,
      loaded: true
    };
  }),
  on(loadNotesFail, state => {
    return { ...state, loading: false };
  }),
  // GET
  on(getNote, state => {
    return { ...state, loading: true, loaded: false };
  }),
  on(getNoteSuccess, (state, { note }) => {
    return {
      ...state,
      data: noteAdapter.upsertOne(note, state.data),
      loading: false,
      loaded: true
    };
  }),
  on(getNoteFail, state => {
    return { ...state, loading: false };
  }),
  // CREATE
  on(createNote, state => {
    return { ...state, loading: true };
  }),
  on(createNoteSuccess, (state, { note }) => {
    return {
      ...state,
      data: noteAdapter.addOne(note, state.data),
      loading: false,
      loaded: true
    };
  }),
  on(createNoteFail, state => {
    return { ...state, loading: false };
  }),
  // UPDATE
  on(updateNote, state => {
    return { ...state, loading: true };
  }),
  on(updateNoteSuccess, (state, { note }) => {
    return {
      ...state,
      data: noteAdapter.updateOne(
        {
          id: note.id,
          changes: { ...note }
        },
        state.data
      ),
      loading: false,
      loaded: true
    };
  }),
  on(updateNoteFail, state => {
    return { ...state, loading: false };
  }),
  // REMOVE
  on(removeNote, state => {
    return { ...state, loading: true };
  }),
  on(removeNoteSuccess, (state, { note }) => {
    return {
      ...state,
      data: noteAdapter.removeOne(note.id, state.data),
      loading: false,
      loaded: true
    };
  }),
  on(removeNoteFail, state => {
    return { ...state, loading: false };
  }),
);

export function noteReducer(state: NotesState, action: Action) {
  return reducer(state, action);
}
