import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-room-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() roomName: string;
  
  constructor(private elRef: ElementRef) {
    console.log(this.elRef.nativeElement.offsetHeight);
    let toolbar = this.elRef.nativeElement.querySelector('md-toolbar')
    console.log(toolbar);
  }

  ngOnInit() {
  }

}
