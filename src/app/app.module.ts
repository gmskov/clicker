import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { ClickerPageComponent } from './components/clicker-page/clicker-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'play', component: ClickerPageComponent },
  { path: 'result', component: ResultPageComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ClickerPageComponent,
    ResultPageComponent,
    ResultItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
