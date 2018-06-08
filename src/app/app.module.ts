import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReviewmainComponent } from './reviewmain/reviewmain.component';
import { BlocksComponent } from './reviewmain/blocks/blocks.component';
import { StatusbarComponent } from './reviewmain/statusbar/statusbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ReviewmainComponent,
    BlocksComponent,
    StatusbarComponent,
    
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
