import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note.interface';

export const BACKEND_BASE_URL = new InjectionToken<string>('BACKEND_BASE_URL');

@Injectable()
export class NotesService {
  constructor(
    private readonly http: HttpClient,
    @Inject(BACKEND_BASE_URL) private readonly baseUrl: string
  ) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.buildUrl(`/notes`));
  }

  createNote(data: Note): Observable<Note> {
    return this.http.post<Note>(this.buildUrl(`/notes`), data);
  }

  updateNote(id: number, data: Note): Observable<Note> {
    return this.http.put<Note>(this.buildUrl(`/notes/${id}`), data);
  }

  removeNote(id: number): Observable<Note> {
    return this.http.delete<Note>(this.buildUrl(`/notes/${id}`));
  }

  private buildUrl(path: string): string {
    return this.baseUrl + path;
  }
}