import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from "../shared/validators/custom-validators";
import {IDeactivateComponent} from "../shared/guard/deactivated-guard-inscription.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-inscription-person',
  templateUrl: './inscription-person.component.html',
  styleUrls: ['./inscription-person.component.css']
})
export class InscriptionPersonComponent implements OnInit, IDeactivateComponent {
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<any>;
  // private property to store form value
  private readonly _form1: FormGroup;


  constructor() {
    this._submit$ = new EventEmitter<any>();
    this._cancel$ = new EventEmitter<void>();
    this._form1 = InscriptionPersonComponent._buildForm1();
  }

  ngOnInit() {
  }

  private static _buildForm1(): FormGroup {
    // @ts-ignore
    return new FormGroup({
      id: new FormControl(),
      photo: new FormControl(),
      firstname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required, CustomValidators.emailcheck
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('(0|\\+33)\\d{9}')
      ])),
      pwd: new FormControl('', Validators.compose([
        Validators.required,
        CustomValidators.upperPwd,
        CustomValidators.numbersPwd,
        Validators.minLength(8)
      ])),
      pwd2 : new FormControl('', Validators.compose([
        Validators.required
      ])),
      isPrivate: new FormControl(),
    },{validators : CustomValidators.match('pwd','pwd2')});
  }


  get form1(): FormGroup {
    return this._form1;
  }

  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  @Output('submit')
  get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  cancel(): void {
    this._cancel$.emit();
  }

  submit(a: any): void {
    console.log("ui")
    var res : any;
    //rassembler les 3 formulaire
    this._submit$.emit(res);
  }

  isPrivate(checked: boolean): void {
    this._form1.patchValue({priv: checked});
  }

  canExit(): Observable<boolean> | Promise<boolean> | boolean {
    return (confirm("voulez-vous vraiment quitter la page sans avoir finalisé votre inscription ? "));
  }
}
