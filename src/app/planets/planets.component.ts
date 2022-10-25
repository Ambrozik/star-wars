import { Component, OnInit } from '@angular/core';
import {Planet} from "../shared/types/planet.type";
import {PlanetService} from "../shared/services/planet.service";
import {PLANETS} from "../../_static/planet";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  // @ts-ignore
  private _planets : Planet[] = [];

  constructor(private _planetService: PlanetService) {}
  ngOnInit(): void {
    this.getPlanets();
  }


  get planets(): Planet[] {
    return this._planets;
  }

  getPlanets(): void{
    this._planetService.getPlanets().subscribe(planets => this._planets = planets ) ;
  }


}
