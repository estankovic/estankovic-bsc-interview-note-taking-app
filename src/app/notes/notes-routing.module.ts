import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateComponent } from './containers/note-create/note-create.component';
import { NoteDetailComponent } from './containers/note-detail/note-detail.component';
import { NoteEditComponent } from './containers/note-edit/note-edit.component';
import { NoteListComponent } from './containers/note-list/note-list.component';
import { ResolveNoteGuard } from './guards/resolve-note.guard';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'create', component: NoteCreateComponent },
  {
    path: ':noteId',
    component: NoteDetailComponent,
    canActivate: [ResolveNoteGuard]
  },
  {
    path: ':noteId/edit',
    component: NoteEditComponent,
    canActivate: [ResolveNoteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
