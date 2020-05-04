import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteListComponent } from './containers/note-list/note-list.component';

@NgModule({
  declarations: [NoteListComponent],
  imports: [CommonModule, NotesRoutingModule]
})
export class NotesModule {}
