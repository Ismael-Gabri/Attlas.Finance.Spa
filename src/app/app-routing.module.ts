import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component';
import { MainBoardComponent } from './main-board/main-board.component';

const routes: Routes = [
  {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {
        path:'login',
        component:LoginBoxComponent,
    },
    {
        path:'dashboard',
        component:MainBoardComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
