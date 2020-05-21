import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  static DEFAULT_LANGUAGE = 'en';

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
    localStorage.setItem('application.language', language);
  }

  /**
   * Get saved language of the application, otherwise default value is returned
   */
  getLanguage() {
    return (
      localStorage.getItem('application.language') ||
      LanguageService.DEFAULT_LANGUAGE
    );
  }
}
