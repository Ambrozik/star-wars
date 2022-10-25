import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomValidators} from "../shared/validators/custom-validators";
import {AuthService} from "../shared/services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  _retUrl:string | null="home";
  get form(): FormGroup {
    return this._form;
  }
  private readonly _form: FormGroup;
  constructor(private _router: Router, private _authService :AuthService, private _activedRoute: ActivatedRoute) {
    this._form = ConnectionComponent._buildForm();
  }
  private static _buildForm(): FormGroup {
    return new FormGroup({
      firstname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      pwd: new FormControl('', Validators.compose([
        Validators.required,
        CustomValidators.upperPwd,
        CustomValidators.numbersPwd,
        Validators.minLength(8)
      ])),
    });
  }
  // @ts-ignore
  submit(){
    this._authService.connect(this._form.value).subscribe(
      () => {
      console.log( 'return to '+ this._retUrl);
      if (this._retUrl!=null) {
        this._router.navigate( [this._retUrl]);
      } else {
        this._router.navigate( ['home']);
      }
    });
  }
  ngOnInit(): void {
    this._activedRoute.queryParamMap
      .subscribe(params => {
        this._retUrl = params.get('retUrl');
        console.log( 'LoginComponent/ngOnInit '+ this._retUrl);
      });
  }

}
