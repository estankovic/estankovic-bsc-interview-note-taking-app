import { TestBed } from '@angular/core/testing';

import { ResolveNoteGuard } from './resolve-note.guard';

describe('ResolveNoteGuard', () => {
  let guard: ResolveNoteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolveNoteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
