import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { WelcomeHeaderComponent } from './components/welcome-page/welcome-header/welcome-header.component';
import { WelcomeMainComponent } from './components/welcome-page/welcome-main/welcome-main.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/registration/login/login.component';
import { SignUpComponent } from './components/registration/sign-up/sign-up.component';
import { MainRouteComponent } from './components/boards/main-route/main-route.component';
import { BoardRouteComponent } from './components/boards/board-route/board-route.component';
import { RoutesHeaderComponent } from './components/boards/routes-header/routes-header.component';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardsHeaderComponent } from './components/boards/boards-header/boards-header.component';

import { ModalsModule } from './components/modals/modals.module';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  MainComponent,
  WelcomePageComponent,
  WelcomeHeaderComponent,
  WelcomeMainComponent,
  RegistrationComponent,
  LoginComponent,
  SignUpComponent,
  MainRouteComponent,
  BoardRouteComponent,
  RoutesHeaderComponent,
  BoardsComponent,
  BoardsHeaderComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalsModule],
  exports: COMPONENTS,
})
export class SharedModule {}
