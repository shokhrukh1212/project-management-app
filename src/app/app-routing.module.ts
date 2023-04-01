import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './shared/components/welcome-page/welcome-page.component';
import { BoardsComponent } from './shared/components/boards/boards.component';
import { LoginComponent } from './shared/components/registration/login/login.component';
import { SignUpComponent } from './shared/components/registration/sign-up/sign-up.component';
import { BoardComponent } from './shared/components/boards/board/board.component';
import { ColumnComponent } from './shared/components/boards/column/column.component';
import { AuthGuard } from './shared/guards/auth.guard';
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
    canActivate: [AuthGuard],
  },
  {
    path: 'auth/signin',
    component: LoginComponent,
  },
  {
    path: 'auth/signup',
    component: SignUpComponent,
  },
  { path: 'board', component: ColumnComponent, canActivate: [AuthGuard] },
  { path: 'main', component: BoardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
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
