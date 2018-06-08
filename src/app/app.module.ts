import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReviewmainComponent } from './reviewmain/reviewmain.component';
import { StatusComponent } from './reviewmain/status/status.component';
import { SidebaralternateComponent } from './sidebaralternate/sidebaralternate.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ReviewmainComponent,
    StatusComponent,
    SidebaralternateComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
