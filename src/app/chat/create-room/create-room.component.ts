import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MqttMessage, MqttModule, MqttService, MqttConnectionState } from 'ngx-mqtt';

import { Subscription } from '../../core/models/mqtt/subscription.model';

import { MqttApiService } from '../../core/services/mqtt.api.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  @Input() roomName: string;
  @Input() userName: string;

  public userNameFormControl = new FormControl('', [ Validators.required, Validators.minLength(3) ]);
  public roomNameFormControl = new FormControl('', [ Validators.required, Validators.minLength(5) ]);

  private frmCtlStsNextCallback = (res) => {
    if (this.userNameFormControl.valid && this.roomNameFormControl.valid) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  };
  private frmCtlStsErrorCallback = (err) => {
    // console.log(err);
  };
  private frmCtlStsCompleteCallback = () => {};

  public isFormValid: boolean = false;

  constructor(private _mqttService: MqttService,
              private mqttApiService: MqttApiService,
              private dialogRef: MdDialogRef<CreateRoomComponent>,
              private router: Router) {

  }

  ngOnInit() {

    this.userNameFormControl.statusChanges.subscribe(this.frmCtlStsNextCallback, this.frmCtlStsErrorCallback, this.frmCtlStsCompleteCallback);
    this.roomNameFormControl.statusChanges.subscribe(this.frmCtlStsNextCallback, this.frmCtlStsErrorCallback, this.frmCtlStsCompleteCallback);

    this._mqttService.state.subscribe(
      (res) => {
        if (res === MqttConnectionState.CONNECTED) {
          this.mqttApiService.getSubscriptions().subscribe(
            res => {
              console.log(res);
              let sub: Subscription = res;
              console.log(sub.result);
            },
            error => {
              // this.errorMessage = <any>error
            }
          );
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ngAfterViewInit() {

  }

  public enterTopic() {
    console.log("enter topic!!!!");
    // this.router.navigate(['/chat/topic']);
    this.router.navigate(['/chat/room', this.roomName]);
    this.dialogRef.close();
  }
}
