import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ClickerPageComponent } from './components/clicker-page/clicker-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { ResultItemComponent } from './components/result-item/result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ClickerPageComponent,
    ResultPageComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
