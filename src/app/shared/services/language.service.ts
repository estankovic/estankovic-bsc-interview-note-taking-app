import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
  static DEFAULT_LANGUAGE = 'en';
  static LANGUAGE_STORE_KEY = 'application.language';

  constructor(private readonly translationService: TranslateService) {}

  /**
   * Initialize default language
   */
  init() {
    this.setLanguage(this.getLanguage());
  }

  /**
   * Sets language of the application
   */
  setLanguage(language: string) {
    this.translationService.use(language);
    localStorage.setItem(LanguageService.LANGUAGE_STORE_KEY, language);
  }

  /**
   * Get saved language of the application, otherwise default value is returned
   */
  getLanguage() {
    return (
      localStorage.getItem(LanguageService.LANGUAGE_STORE_KEY) ||
      LanguageService.DEFAULT_LANGUAGE
    );
  }
}
