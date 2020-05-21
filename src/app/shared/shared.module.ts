import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [LanguageSwitcherComponent]
})
export class SharedModule {}
