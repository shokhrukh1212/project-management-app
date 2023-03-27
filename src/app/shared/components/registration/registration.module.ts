import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class RegistrationModule {
  constructor(public translate: TranslateService) {}
}
