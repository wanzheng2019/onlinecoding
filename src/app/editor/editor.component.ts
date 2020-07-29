import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EventsService } from '../events.service';
import { record } from 'rrweb';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  events:any[];
  constructor(private router: Router, private eventsService:EventsService) { }

  ngOnInit(): void {
    this.getEvents();
    this.recordEvents();
  }

  getEvents(){
    this.events =  this.eventsService.getEvents()
    
  }

  codingDone(){
  //  this.events.push("hello world")
    console.log("codingDone")
  }
  recordEvents(){
    let test_events = this.events;
    console.log("record_event")
    record({
      emit(event) {
        // 将 event 存入 events 数组中
        test_events.push(event);
      },
    });

  }

  gotoReplay(){
    this.router.navigate(['/replay']);
  }
  
}
