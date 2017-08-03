import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-room-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() roomName: string;
  
  constructor() { }

  ngOnInit() {
  }

}
