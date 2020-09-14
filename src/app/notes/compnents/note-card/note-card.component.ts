import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Note } from '../../note.interface';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() editing = false;

  @Input() note: Note;

  @Output() noteChanges = new EventEmitter<Note>();

  private readonly destroyed$ = new Subject();

  form = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    done: new FormControl()
  });

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.noteChanges.emit(data);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.note) {
      this.form.setValue(
        {
          id: this.note.id,
          title: this.note.title,
          done: this.note.done
        },
        { emitEvent: false }
      );
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
