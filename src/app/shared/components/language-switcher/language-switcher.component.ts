import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    language: new FormControl(this.langService.getLanguage())
  });

  destroyed$ = new Subject();

  constructor(private readonly langService: LanguageService) {}

  ngOnInit(): void {
    this.form
      .get('language')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(language => {
        this.langService.setLanguage(language);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
