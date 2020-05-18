import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NoteDetailComponent } from './containers/note-detail/note-detail.component';
import { NoteListComponent } from './containers/note-list/note-list.component';
import { ResolveNoteGuard } from './guards/resolve-note.guard';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesService } from './notes.service';
import { NoteEffects } from './store/effects';
import { noteReducer } from './store/reducer';

@NgModule({
  declarations: [NoteListComponent, NoteDetailComponent],
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
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [NotesService, ResolveNoteGuard]
})
export class NotesModule {}
