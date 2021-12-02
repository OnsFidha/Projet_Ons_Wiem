import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Description } from '../model/description';
import { Voyage } from '../model/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  
  constructor() { }

  Voyages:Voyage[] =[
    new Voyage ("lienimage",1,"italie","Europe",new Date(2021,12,5),new Date(2021,12,19),14,500,true,
      [new Description (
        "description voyage Italie",
        "planning des activités par jour",
        "nom hotel en Italie",
        4)]
      ),
      new Voyage ("lienimage",2,"londres","Europe",new Date(2022,1,14),new Date(2022,1,21),7,700,false,
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
getVoyageByRecherche(f:FormGroup){
    return this.Voyages.filter(l=>l.destination==f.controls['dest'].value);
  }


    getVoyages(){
      return this.Voyages;
    }
}
