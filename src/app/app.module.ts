import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { ListRoutesComponent } from './list-routes/list-routes.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    ListRoutesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
