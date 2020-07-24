import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  page: number = 1;
  limit: number = 10;
  loaderOne = false;
  opportunityListData: any = [];
  opportunityList: any = [];
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient,
    ) { }

  ngOnInit(){
    this.loadData();
  }
  loadData() {
    this.opportunityList = [];
    this.loaderOne = true;
    let base_url = "https://api.github.com/search/issues?";
    let get_params = `q=repo:angular/components&sort=created&order=dec&page=${this.page}`;
    let url = `${base_url}${get_params}`;
    this.http
      .get<{ success: object }>(url)
      .subscribe((response: any) => {
        console.log(response);
        if (
          response.items &&
          response.total_count &&
          response.items.length > 0
        ) {
          this.opportunityListData.current_page = this.page;
          this.opportunityListData.last_page = Math.ceil(response.total_count/this.limit);
          let sortedData = response.items.sort((a, b) =>{
            let isOrder = 'asc';
            return compare(a.created_at, b.created_at, isOrder);
          });
          this.opportunityList = sortedData;
          console.log(this.opportunityListData);
          this.loaderOne = false;
        }
      });
  }

  add(i) {
    var page = 1;
    if(this.page > 2) {
      page = this.page -1;
    }
    return page*this.limit + (i+1); 
  }
  pageCount(limit: any) {
    this.limit = limit;
    this.page = 1;
    this.loadData();
  }
  pageNumber(page: any) {
    if (page >= 1 && page <= this.opportunityListData.last_page) {
      this.page = page;
      this.loadData();
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: any) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}