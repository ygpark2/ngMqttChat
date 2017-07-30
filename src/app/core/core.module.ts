import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ApiService } from './services/api.service';
import { SettingsService } from './services/settings.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { MqttService } from './services/mqtt.service';

import { JWT } from './jwt';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    HttpModule,
    RouterModule
  ],
  providers: [
    ApiService,
    SettingsService,
    AuthService,
    PostService,
    MqttService,
    JWT,
    AuthGuard
  ]
})
export class CoreModule { }
