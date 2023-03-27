import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { WelcomeMainComponent } from './components/welcome-page/welcome-main/welcome-main.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/registration/login/login.component';
import { SignUpComponent } from './components/registration/sign-up/sign-up.component';
import { MainRouteComponent } from './components/boards/main-route/main-route.component';
import { BoardRouteComponent } from './components/boards/board-route/board-route.component';
import { BoardsComponent } from './components/boards/boards.component';
import { WelcomeHeaderComponent } from './components/welcome-page/welcome-header/welcome-header.component';
import { BoardsHeaderComponent } from './components/boards/boards-header/boards-header.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { ModalsModule } from './components/modals/modals.module';

const COMPONENTS = [
  FooterComponent,
  MainComponent,
  WelcomePageComponent,
  WelcomeMainComponent,
  RegistrationComponent,
  LoginComponent,
  SignUpComponent,
  MainRouteComponent,
  BoardRouteComponent,
  BoardsComponent,
  WelcomeHeaderComponent,
  BoardsHeaderComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalsModule,
    DragDropModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    TranslateModule,
  ],
  exports: COMPONENTS,
})
export class SharedModule {}
