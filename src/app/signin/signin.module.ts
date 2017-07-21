import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    SigninRoutingModule,
    SharedModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
