import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SlidnavComponent } from './shared/slidnav/slidnav.component';
import {MaterialModule} from "./material.module";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { TestComponent } from './test/test.component';
import { InscriptionPersonComponent } from './inscription-person/inscription-person.component';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ConnectionComponent } from './connection/connection.component';
import {DeactivatedGuardInscriptionService} from "./shared/guard/deactivated-guard-inscription.service";
import { PlanetsComponent } from './planets/planets.component';
import { MyPlanetsComponent } from './my-planets/my-planets.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlidnavComponent,
    TestComponent,
    InscriptionPersonComponent,
    ConnectionComponent,
    PlanetsComponent,
    MyPlanetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,

  ],
  providers: [DeactivatedGuardInscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
