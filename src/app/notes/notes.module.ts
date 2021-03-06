import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { NoteCardComponent } from './compnents/note-card/note-card.component';
import { NoteCreateComponent } from './containers/note-create/note-create.component';
import { NoteDetailComponent } from './containers/note-detail/note-detail.component';
import { NoteEditComponent } from './containers/note-edit/note-edit.component';
import { NoteListComponent } from './containers/note-list/note-list.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { ResolveNoteGuard } from './guards/resolve-note.guard';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesService } from './notes.service';
import { NoteEffects } from './store/effects';
import { noteReducer } from './store/reducer';

@NgModule({
  declarations: [
    NoteListComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteCardComponent,
    NoteCreateComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
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
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    TranslateModule,
  ],
  providers: [NotesService, ResolveNoteGuard]
})
export class NotesModule {}
