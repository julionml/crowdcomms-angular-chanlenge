import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SpeakersInterface } from 'src/app/models/speakers.interface';
import { SpeakersService } from 'src/app/services/speakers.service';
import {MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit, AfterViewInit{
  public speakers: SpeakersInterface[] = [];
  public displayedColumns: string[] = [ 'email', 'gender', 'id', 'nat', 'name'];
  public  dataSource?: any;
  constructor(private speakersService: SpeakersService) { }
  

  ngOnInit(): void {
    this.getSpeakersInfo();
    
    
  }

  ngAfterViewInit() {
   
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
        this.dataSource = new MatTableDataSource(this.speakers);
      },
      error: error =>
      console.log('Error',error)
    }   
    );
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
