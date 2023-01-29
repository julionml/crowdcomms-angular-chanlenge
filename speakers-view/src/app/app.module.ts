import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpeakersListComponent } from './components/speakers-list/speakers-list.component';
import { SpeakersDetailComponent } from './components/speakers-detail/speakers-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakersListComponent,
    SpeakersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
