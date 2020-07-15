import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReuseService {

  constructor() { }

  sametime(data: any){
    let SCdate,MVdate;
    return [SCdate,MVdate];
  }
}
