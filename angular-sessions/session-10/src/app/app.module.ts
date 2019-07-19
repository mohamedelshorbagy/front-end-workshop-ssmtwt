import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AddCardComponent } from './add-card/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AddCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
