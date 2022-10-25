import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Planet} from "../types/planet.type";
import {PLANETS} from "../../../_static/planet";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private readonly _defaultPlanet : Planet;
  constructor() {
    this._defaultPlanet = {
      id: '1',
      planetName :"Alderaan",
      region: "Noyau",
      systeme : "Alderaan",
      land: ["Plaines","mers"],
      inhabitant: ["humain"],
      Gouvernment: "republique",
      minerals: [{
        mineralName: "or",
        quantityperCent: 0.15,
        type: "precieux"
      }],
      wildlife:[
        "Bolraida",
        "Brouteur",
        "Chat Manka",
        "Iraida",
        "Kite",
        "Nerf",
        "Oiseau traqueur",
        "Papillon laineux",
        "Thranta",
        "Tigre vorn",
      ],
      flora:["fleur"],
    }
  }


  getPlanets(): Observable<Planet[]>{
    const p = of(PLANETS)
    return p;
  }
}
