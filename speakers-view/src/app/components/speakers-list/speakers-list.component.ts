import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SpeakersInterface } from 'src/app/models/speakers.interface';
import { SpeakersService } from 'src/app/services/speakers.service';
import {MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements  AfterViewInit{
  public speakers: SpeakersInterface[] = [];
  public displayedColumns: string[] = [ 'email', 'gender', 'id', 'nat', 'name'];
  public  dataSource?: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private speakersService: SpeakersService) { 
    
  }
  

  

  ngAfterViewInit() {
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
        this.dataSource = new MatTableDataSource(this.speakers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: error =>
      console.log('Error',error)
    }   
    );
   
  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public goToSpeakerDetail(speaker: any): void{
    console.log('speaker',speaker);
  }

}
