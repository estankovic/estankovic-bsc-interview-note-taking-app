import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesState } from './reducer';

const featureSelector = createFeatureSelector<NotesState>('notes');

const notesData = createSelector(featureSelector, state => state.data);
const notesDataEntities = createSelector(notesData, state => state.entities);
const notesList = createSelector(featureSelector, state => state.list);
export const notesLoading = createSelector(
  featureSelector,
  state => state.loading
);
export const notesLoaded = createSelector(
  featureSelector,
  state => state.loaded
);

export const notesListView = createSelector(
  notesDataEntities,
  notesList,
  (data, list) => list.map(item => data[item])
);
