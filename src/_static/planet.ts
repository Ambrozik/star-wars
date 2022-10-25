import {Planet} from "../app/shared/types/planet.type";
export const PLANETS : Planet[] =[
  {
  id: '5763cd4d9d2a4f259b53c901',
    photo: "https://static.wikia.nocookie.net/frstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20160506145540",
  planetName :"Alderaan",
  region: "Noyau",
  systeme : "Alderaan",
  land: ["Plaines","mers"],
  inhabitant: ["humain"],
  Gouvernment: "republique",
  minerals: [
    {
      mineralName: "or",
      quantityperCent: 0.15,
      type: "precieux"
    },
    {
    mineralName: "bronze",
    quantityperCent: 0.45,
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
},{
  id: '5763cd4d9d2a4f259b53c901',
    photo: "https://static.wikia.nocookie.net/frstarwars/images/f/f6/Tatoooinefull.jpg/revision/latest?cb=20070206173843",
  planetName :"Tatooine",
  region: "Bordure Extérieure",
  systeme : "Système Tatoo",
  land: ["Désert"],
  inhabitant: ["Humains", "Jawas", "Hommes des Sables"],
  Gouvernment: "empire",
  minerals:  [{
    mineralName: "bronze",
    quantityperCent: 0.45,
    type: "precieux"
  }],
  wildlife:[
    "Bantha",
    "Cornu de Sable",
    "Démon de Sable"
  ],
  flora:["fleur","Herbe poonten"],
},
]
