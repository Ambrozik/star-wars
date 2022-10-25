import { Component, OnInit } from '@angular/core';
import {Planet} from "../shared/types/planet.type";
import {PlanetService} from "../shared/services/planet.service";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  ngOnInit(): void {
  }


}
