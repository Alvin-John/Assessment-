import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  isFrom: any;
  isTo: any;
  allIn: any = [];
  exactFrom: any;
  exactTo: any;
  isModelOpen = false;
  isMonday:any = [];
  isTuesday: any = [];
  isWednesday: any = [];
  isThursday: any = [];
  isFriday: any = [];
  weekDays = [
    { heading: "heading1", cols: "#" , tile: "Monday" ,is_show: true },
    { heading: "heading2", cols: "#" , tile: "Tuesday" ,is_show: false },
    { heading: "heading3", cols: "#" , tile: "Wednesday" ,is_show: false },
    { heading: "heading4", cols: "#" , tile: "Thursday" ,is_show: false },
    { heading: "heading5", cols: "#" , tile: "Friday" ,is_show: false },
  ];
  isPickedDay: any;
  constructor(
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.toastr.success('Deleted Successfully');
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
    console.log(this.exactFrom);

  }
  toChanage(){
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
    this.exactTo = hours + ':' + minutes + ' ' + meridian;
    console.log(this.exactTo);
  }
  openModel(obj:any){
    this.isPickedDay = obj;
    this.isModelOpen = true;
  }
  modelClose(){
    this.isPickedDay = null;
    this.isModelOpen = false;
  }
  success(data:any){
    if(data){
      console.log(data);
      if(this.isSameTime(data)){
        if(data.isDay == 'Monday'){
          if(this.isMonday.length > 0){
            this.isMonday.forEach(element => {
              if(data.checkFormtime > element.checkFormtime && data.checkTotime < element.checkTotime){
                this.toastr.warning("In beetween time should not be allowed");
                data.pushto = false;
              } else if (element.checkTotime == data.checkFormtime){
                element.checkTotime = data.checkTotime;
                element.totime = data.totime;
                data.pushto = false;
                this.toastr.success("Time merged");
              }
            });
            this.isMonday;
            if(data.pushto){
              this.isMonday.push(data);
            }
          } else {
            this.isMonday.push(data);
          }
        }else if(data.isDay == 'Tuesday'){
          if(this.isTuesday.length > 0){
            this.isTuesday.forEach(element => {
              if(data.checkFormtime > element.checkFormtime && data.checkTotime < element.checkTotime){
                this.toastr.warning("In beetween time should not be allowed");
                data.pushto = false;
              } else if (element.checkTotime == data.checkFormtime){
                element.checkTotime = data.checkTotime;
                element.totime = data.totime;
                data.pushto = false;
                this.toastr.success("Time merged");
              }
            });
            this.isTuesday;
            if(data.pushto){
              this.isTuesday.push(data);
            }
          } else {
            this.isTuesday.push(data);
          }
        }else if(data.isDay == 'Wednesday'){
          if(this.isWednesday.length > 0){
            this.isWednesday.forEach(element => {
              if(data.checkFormtime > element.checkFormtime && data.checkTotime < element.checkTotime){
                this.toastr.warning("In beetween time should not be allowed");
                data.pushto = false;
              } else if (element.checkTotime == data.checkFormtime){
                element.checkTotime = data.checkTotime;
                element.totime = data.totime;
                data.pushto = false;
                this.toastr.success("Time merged");
              }
            });
            this.isWednesday;
            if(data.pushto){
              this.isWednesday.push(data);
            }
          } else {
            this.isWednesday.push(data);
          }
        }else if(data.isDay == 'Thursday'){
          if(this.isThursday.length > 0){
            this.isThursday.forEach(element => {
              if(data.checkFormtime > element.checkFormtime && data.checkTotime < element.checkTotime){
                this.toastr.warning("In beetween time should not be allowed");
                data.pushto = false;
              } else if (element.checkTotime == data.checkFormtime){
                element.checkTotime = data.checkTotime;
                element.totime = data.totime;
                data.pushto = false;
                this.toastr.success("Time merged");
              }
            });
            this.isThursday;
            if(data.pushto){
              this.isThursday.push(data);
            }
          } else {
            this.isThursday.push(data);
          }
        }else if(data.isDay == 'Friday'){
          if(this.isFriday.length > 0){
            this.isFriday.forEach(element => {
              if(data.checkFormtime > element.checkFormtime && data.checkTotime < element.checkTotime){
                this.toastr.warning("In beetween time should not be allowed");
                data.pushto = false;
              } else if (element.checkTotime == data.checkFormtime){
                element.checkTotime = data.checkTotime;
                element.totime = data.totime;
                data.pushto = false;
                this.toastr.success("Time merged");
              }
            });
            this.isFriday;
            if(data.pushto){
              this.isFriday.push(data);
            }
          } else {
            this.isFriday.push(data);
          }
        }
      } else {
        this.toastr.warning('Same time should not be conflict on an another day')
      }
      this.isModelOpen = false;
    }
  }
  isSameTime(data:any){
    if(data.isDay == 'Monday'){
      if(this.isTuesday.length > 0){
        let oucome = this.isTuesday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isWednesday.length > 0){
        let oucome = this.isWednesday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isThursday.length > 0){
        let oucome = this.isThursday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isFriday.length > 0){
        let oucome = this.isFriday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else{
        return true;
      }
    }else if(data.isDay == 'Tuesday'){
      if(this.isMonday.length > 0){
        let oucome = this.isMonday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isWednesday.length > 0){
        let oucome = this.isWednesday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isThursday.length > 0){
        let oucome = this.isThursday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isFriday.length > 0){
        let oucome = this.isFriday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else{
        return true;
      }
    }else if(data.isDay == 'Wednesday'){
      if(this.isMonday.length > 0){
        let oucome = this.isMonday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isTuesday.length > 0){
        let oucome = this.isWednesday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isThursday.length > 0){
        let oucome = this.isThursday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isFriday.length > 0){
        let oucome = this.isFriday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else{
        return true;
      }
    }else if(data.isDay == 'Thursday'){
      if(this.isMonday.length > 0){
        let oucome = this.isMonday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isTuesday.length > 0){
        let oucome = this.isWednesday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isWednesday.length > 0){
        let oucome = this.isThursday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isFriday.length > 0){
        let oucome = this.isFriday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else{
        return true;
      }
    }else if(data.isDay == 'Friday'){
      if(this.isMonday.length > 0){
        let oucome = this.isMonday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isTuesday.length > 0){
        let oucome = this.isWednesday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isWednesday.length > 0){
        let oucome = this.isThursday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else if(this.isThursday.length > 0){
        let oucome = this.isFriday.find(element => (data.checkFormtime == element.checkFormtime && data.checkTotime == element.checkTotime))
        if(oucome){
          return false;
        } else {
          return true;
        }
      }else{
        return true;
      }
    }
  }

  onSubmit(){
    if(this.isMonday.length > 0){
      this.allIn.push(this.isMonday);
    }
    if(this.isTuesday.length > 0){
      this.allIn.push(this.isTuesday);
    }
    if(this.isWednesday.length > 0){
      this.allIn.push(this.isWednesday);
    }
    if(this.isThursday.length > 0){
      this.allIn.push(this.isThursday);
    }
    if(this.isFriday.length > 0){
      this.allIn.push(this.isFriday);
    }
    const date = new Date;
    console.log(this.allIn, 'payload');
    let keyValue = `weekDays Entry :${date}`;
    console.log(keyValue);
    localStorage.setItem(
      keyValue,
      JSON.stringify(this.allIn)
    );
    this.toastr.success('Successfully Stored in Localstorage');
  }
}
