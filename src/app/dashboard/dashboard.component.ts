import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uname: string;
  constructor(private s: DataService) { 
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
  }
  ngOnInit() {
    this.uname = localStorage.getItem("LoggedInUser");
    console.log('username', this.uname);
  }

}
