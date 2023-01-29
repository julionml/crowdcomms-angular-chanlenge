import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakersInterface } from 'src/app/models/speakers.interface';
@Component({
  selector: 'app-speakers-detail',
  templateUrl: './speakers-detail.component.html',
  styleUrls: ['./speakers-detail.component.scss']
})
export class SpeakersDetailComponent {
  public speaker = {} as SpeakersInterface;
  constructor(private router: Router) {
    this.speaker = this.router.getCurrentNavigation()?.extras.state?.['response'].speaker;
    console.log('speaker',this.speaker);
    if (!this.speaker) {
     
      this.router.navigate(['']);
    }
  }
  backToSpeakersList(){
    this.router.navigate(['']);
  }
}
