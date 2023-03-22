import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WelcomePageComponent} from "./shared/components/welcome-page/welcome-page.component";
import {BoardsComponent} from "./shared/components/boards/boards.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'boards',
    component: BoardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
