import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() roomName: string;
  @Input() userName: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public enterTopic() {
    console.log("enter topic!!!!");
    // this.router.navigate(['/chat/topic']);
    this.router.navigate(['/chat/room', this.roomName]);
  }
}
