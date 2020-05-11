import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    EffectsModule.forFeature([NoteEffects]),
    MatToolbarModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [NotesService]
})
export class NotesModule {}
