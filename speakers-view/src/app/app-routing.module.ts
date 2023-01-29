import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersDetailComponent } from './components/speakers-detail/speakers-detail.component';
import { SpeakersListComponent } from './components/speakers-list/speakers-list.component';

const routes: Routes = [
  {
    path: 'speakers-list',
    component: SpeakersListComponent,
   
  },
  {
    path: 'speakers-deatil/:speakerId',
    component: SpeakersDetailComponent,
   
  },
  {
    path: '**',
    redirectTo: 'speakers-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
