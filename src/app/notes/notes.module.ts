import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteListComponent } from './containers/note-list/note-list.component';
import { NotesService } from './notes.service';
import { NoteEffects } from './store/effects';
import { noteReducer } from './store/reducer';

@NgModule({
  declarations: [NoteListComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    StoreModule.forFeature('notes', noteReducer),
    EffectsModule.forFeature([NoteEffects])
  ],
  providers: [NotesService]
})
export class NotesModule {}
