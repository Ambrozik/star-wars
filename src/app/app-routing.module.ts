import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./test/test.component";
import {InscriptionPersonComponent} from "./inscription-person/inscription-person.component";
import {ConnectionComponent} from "./connection/connection.component";
import {DeactivatedGuardInscriptionService} from "./shared/guard/deactivated-guard-inscription.service";
import {PlanetsComponent} from "./planets/planets.component";
import {MyPlanetsComponent} from "./my-planets/my-planets.component";
import {AuthGardService} from "./shared/guard/auth-gard.service";

const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch : 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'inscription', component: InscriptionPersonComponent, canDeactivate:[DeactivatedGuardInscriptionService]},
  {path : 'connection', component: ConnectionComponent},
  {path: 'test', component: TestComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'myplanets', component: MyPlanetsComponent, canActivate : [AuthGardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
