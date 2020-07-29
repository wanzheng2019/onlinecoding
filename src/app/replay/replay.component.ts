import { Component, OnInit,ElementRef,Inject } from '@angular/core';
import { DOCUMENT,Location } from '@angular/common';
import { EventsService } from '../events.service';
import {Replayer} from 'rrweb';
@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private eventsService:EventsService,
   private _elementRef: ElementRef, private location:Location) { }
  events:any[];
  replayer = null;
  isplaying = false;
  ngOnInit(): void {
    this.getEvents();
    this.clearDoc();
    this.replay();
  }

  clearDoc(){
    //this._elementRef.nativeElement.remove();
   // this._elementRef.nativeElement.querySelector('#replayer').remove();
   // this._elementRef.nativeElement.innerHTML = '<div id="replayer"></div>'
  // console.log(this._elementRef.nativeElement);
   console.log(this.document.body);
  }

  getEvents(){
    this.events =  this.eventsService.getEvents()
    console.log(this.events);
  }

  replay(){
    let target = this._elementRef.nativeElement.querySelector('#replayer');
  // let target = this.document.body;
    this.replayer = new Replayer(this.events,
        {
          speed: 1,
          root: target,
          loadTimeout: 1000,
          skipInactive: false,

      }
      );
  //  let body = this.document.body;
   /* this.replayer.setConfig({
      speed: 1,
      root: body,
      loadTimeout: 1000,
      skipInactive: false
    })
    */
    this.replayer.enableInteract()
    this.replayer.play();
    this.isplaying = true;

  }

   goBack(){
     this.location.back();
   }
  toggle(){
    if(this.isplaying == true){
      console.log("pause");
      this.replayer.pause();
      this.isplaying = false; 
    }
    else{
      console.log("play");
      this.replayer.play();
      this.isplaying = true;
    }
    
  }

  ngOnDestroy(){
    this.events = [];
    this._elementRef.nativeElement.remove();

  }

}
