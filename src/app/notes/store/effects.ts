import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class NoteEffects {
  constructor(private readonly actions: Actions) {}
}
