import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";
@Component({
  selector: 'app-slidnav',
  templateUrl: './slidnav.component.html',
  styleUrls: ['./slidnav.component.css']
})
export class SlidnavComponent implements OnInit {

  constructor(private _authoService: AuthService, private _router: Router) {
  }

  ngOnInit(): void {

  }


  get view(): string {
    return this._authoService.view;
  }

  logout() {
    this._authoService.logOutUser();
    this._router.navigate(['home']);
  }
}
