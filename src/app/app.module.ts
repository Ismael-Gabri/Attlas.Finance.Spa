import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { FormsModule } from '@angular/forms';
import { NavTopComponent } from './nav-top/nav-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainBoardComponent,
    NavTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
