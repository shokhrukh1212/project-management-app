import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, DropdownDirective],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
