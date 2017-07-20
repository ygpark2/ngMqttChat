import { NgModule } from '@angular/core';
import { MdInputModule, MdGridListModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdDialogModule, MdSnackBarModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { RoomComponent } from './room/room.component';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdInputModule,
    ChatRoutingModule
  ],
  declarations: [ChatComponent, RoomComponent, TopicComponent]
})
export class ChatModule { }
