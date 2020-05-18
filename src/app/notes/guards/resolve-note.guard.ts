import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { Note } from '../note.interface';
import { getNote } from '../store/actions';
import { currentNote, currentNoteId } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class ResolveNoteGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.getFromStoreOrAPI().pipe(switchMap(data => of(true)));
  }

  private getFromStoreOrAPI(): Observable<Note> {
    return this.store.pipe(
      select(currentNote),
      withLatestFrom(this.store.pipe(select(currentNoteId))),
      tap(([data, id]) => {
        if (!data) {
          this.store.dispatch(getNote({ id: parseInt(id, 10) }));
        }
      }),
      map(([data]) => data),
      filter(data => !!data),
      take(1)
    );
  }
}
