import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Person} from "../types/person.type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get view(): string {
    return this._view;
  }
  private _isloggedIn: boolean;
  private _userName:string;
  private _view: string;

  constructor() {
    this._isloggedIn = false;
    this._userName = "anonyme";
    this._view = "DisConnected"
  }

  connect(person : Person): Observable<any>{
    this._view = "Connected";
    this._isloggedIn= true;
    this._userName = person.firstname;
    return of(this._isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this._isloggedIn;
  }
  logOutUser():void{
    this._view = "DisConnected";
    this._isloggedIn = false;
  }


}
