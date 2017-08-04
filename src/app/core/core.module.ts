import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SafePipe } from './pipes/safe.pipe';
import { ReplacePipe } from './pipes/replace.pipe';

import { ApiService } from './services/api.service';
import { SettingsService } from './services/settings.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { MqttApiService } from './services/mqtt.api.service';
import { MqttChatService } from './services/mqtt.chat.service';

import { JWT } from './jwt';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    SafePipe,
    ReplacePipe,
  ],
  imports: [
    HttpModule,
    RouterModule
  ],
  providers: [
    ApiService,
    SettingsService,
    AuthService,
    PostService,
    MqttApiService,
    MqttChatService,
    JWT,
    AuthGuard
  ]
})
export class CoreModule { }
