import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared.module';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    // reset localstorage
    localStorage.removeItem(LanguageService.LANGUAGE_STORE_KEY);

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), SharedModule],
      providers: [LanguageService]
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default language', () => {
    expect(service.getLanguage()).toBe(LanguageService.DEFAULT_LANGUAGE);
  });

  it('should set language to localstorage', () => {
    const nextLanguage = 'sk';
    service.setLanguage(nextLanguage);
    expect(service.getLanguage()).toBe(nextLanguage);
  });
});
