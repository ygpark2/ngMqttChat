import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    console.log('calling onLogout...');
    this.authService.logout();
  }

}
