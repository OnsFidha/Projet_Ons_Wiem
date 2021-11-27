import { Injectable } from '@angular/core';
import { Description } from '../model/description';
import { Voyage } from '../model/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  constructor() { }

  Voyages:Voyage[] =[
    new Voyage ("lienimage",1,"Italie","Europe",new Date(2021,12,5),new Date(2021,12,19),14,500,true,
      [new Description (
        "description voyage Italie",
        "planning des activités par jour",
        "nom hotel en Italie",
        4)]
      ),
      new Voyage ("lienimage",2,"Londres","Europe",new Date(2022,1,14),new Date(2022,1,21),7,700,false,
      [new Description (
        "description voyage organisé Londres",
        "planning des activités par jour",
        "nom hotel en Londres",
        3)]
      ),
      new Voyage ("lienimage",3,"coreé du sud","Asie",new Date(2022,2,30),new Date(2022,3,5),5,1000,false,
      [new Description (
        "description voyage organisé coreé du sud",
        "planning des activités par jour",
        "nom hotel en coreé du sud",
        5)]
      )
    ]

    getVoyages(){
      return this.Voyages;
    }
}
