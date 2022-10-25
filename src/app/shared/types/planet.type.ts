export interface Planet {
  id?: string;
  photo?:string;
  planetName :string;
  region? : string;
  systeme? : string;
  land: string[];
  inhabitant: string[];
  Gouvernment: string;
  minerals?: Mineral[];
  wildlife: string[];
  flora:string[];
}
export type Mineral = {
  mineralName : string;
  quantityperCent :  number;
  type: string;
}
