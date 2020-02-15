import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableExampleComponent } from './examples/observable-example/observable-example.component';
import { SubjectExampleComponent } from './examples/subject-example/subject-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableExampleComponent,
    SubjectExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
