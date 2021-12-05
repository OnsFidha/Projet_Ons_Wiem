import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Description } from '../model/description';
import { Voyage } from '../model/voyage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URLL="http://localhost:3000/voyages"

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  
  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  
    getVoyages():Observable<Voyage[]>{
      return this.http.get<Voyage[]>(URLL);
=======
  Voyages:Voyage[] =[
    new Voyage ("lienimage",1,"italie","Europe",new Date(2021,12,5),new Date(2021,12,19),14,500,true,
      [new Description (1,"italie",
        "description voyage Italie",
        "planning des activités par jour",
        "nom hotel en Italie",
        4)]
      ),
      new Voyage ("lienimage",2,"londres","Europe",new Date(2022,1,14),new Date(2022,1,21),7,700,false,
      [new Description (2,"londres",
        "description voyage organisé Londres",
        "planning des activités par jour",
        "nom hotel en Londres",
        3)]
      ),
      new Voyage ("lienimage",3,"coreé du sud","Asie",new Date(2022,2,30),new Date(2022,3,5),5,1000,false,
      [new Description (3,"corée du sud",
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
>>>>>>> 4337062786e12e626569a3a797f10fa52cbd11e4
    }
}
