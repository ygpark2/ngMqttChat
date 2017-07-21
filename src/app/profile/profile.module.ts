import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
