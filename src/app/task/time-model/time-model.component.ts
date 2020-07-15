
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-time-model",
  templateUrl: "time-model.component.html",
  styleUrls: ["time-model.component.css"]
})
export class TimeModelComponent implements OnInit {
  @Input() resource: any;
  @Output() closeModalEvent = new EventEmitter<Boolean>();
  @Output() sendBack = new EventEmitter<any>();
  isFrom: any;
  isTo: any;
  allIn: any = [];
  exactFrom: any;
  exactTo: any;
  isModelOpen = false;
  constructor(
    private toastr: ToastrService,
  ) {}
  ngOnInit() {
  }
  formChange(){
    let timeSplit = this.isFrom.split(':'),hours,minutes,meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      meridian = 'AM';
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
    this.exactFrom = hours + ':' + minutes + ' ' + meridian;
  }
  toChanage(){
    let timeSplit = this.isTo.split(':'),hours,minutes,meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      meridian = 'AM';
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
    this.exactTo = hours + ':' + minutes + ' ' + meridian;
  }
  onSubmit(){
    console.log("onSubmit");
    if(this.exactFrom && this.exactTo){
      let payload = {
        formtime: this.exactFrom,
        totime: this.exactTo,
        checkFormtime: this.isFrom,
        checkTotime: this.isTo,
        isDay: this.resource,
        pushto: true
      }
      console.log(payload);
      this.sendBack.emit(payload);
    }else{
      this.toastr.error("fields are required");
    }
  }
  onCloseModal(event: any) {
    this.closeModalEvent.emit(true);
  }
}
