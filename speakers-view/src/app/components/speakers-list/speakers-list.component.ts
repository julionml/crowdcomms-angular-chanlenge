import { Component, OnInit } from '@angular/core';
import { SpeakersInterface } from 'src/app/models/speakers.interface';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit{
  public speakers: SpeakersInterface[] = [];
  constructor(private speakersService: SpeakersService) { }

  ngOnInit(): void {
    this.getSpeakersInfo();
    
  }
  
  public getSpeakersInfo():void {
     this.speakersService.getSpeaksers(3,40).subscribe({
      next: (speakers:any) =>{
        this.speakers = speakers.results.map((speaker: any) =>{
        let speakerItem = {} as SpeakersInterface
        speakerItem.email = speaker.email;
        speakerItem.gender = speaker.gender;
        speakerItem.id = speaker.id.value;
        speakerItem.nat = speaker.nat;
        speakerItem.name = `${speaker.name.first} ${speaker.name.last}`
        speakerItem.picture = speaker.picture.thumbnail;
        return speakerItem;
       }
        );
        
      },
      error: error =>
      console.log('Error',error)
    }   
    );
   
  }
}
