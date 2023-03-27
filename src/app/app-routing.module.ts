import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './shared/components/welcome-page/welcome-page.component';
import { BoardsComponent } from './shared/components/boards/boards.component';
import { LoginComponent } from './shared/components/registration/login/login.component';
import { SignUpComponent } from './shared/components/registration/sign-up/sign-up.component';
import { MainRouteComponent } from './shared/components/boards/main-route/main-route.component';
import { BoardRouteComponent } from './shared/components/boards/board-route/board-route.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'auth/signin',
    component: LoginComponent,
  },
  {
    path: 'auth/signup',
    component: SignUpComponent,
  },
  { path: 'board', component: BoardRouteComponent },
  { path: 'main', component: MainRouteComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
