import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdInputModule, MdGridListModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdDialogModule, MdSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from './chat.component';
import { RoomComponent } from './room/room.component';
import { TopicComponent } from './topic/topic.component';
import { LeftMenuComponent } from './room/left-menu/left-menu.component';
import { TopBarComponent } from './room/top-bar/top-bar.component';
import { MessageContentComponent } from './room/message-content/message-content.component';
import { InputActionComponent } from './room/input-action/input-action.component';
import { CreateRoomComponent } from './create-room/create-room.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatComponent,
    RoomComponent,
    TopicComponent,
    LeftMenuComponent,
    TopBarComponent,
    MessageContentComponent,
    InputActionComponent,
    CreateRoomComponent
  ],
  entryComponents: [
    CreateRoomComponent,
  ],
})
export class ChatModule { }
