import { Injectable } from '@angular/core';
import { Description } from '../model/description';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private description:Description[]=[
    new Description(1,"italie","voyage italie","de 18h a 20h","Guapa Hotel",4),
    new Description(2,"londres","voyage Londres","de 6h a 10h","Guapa Hotel",3),
    new Description(3,"corée du sud","voyage Corrée du sud","de 8h a 2h","Guapa Hotel",5)
  ];

  constructor() { }
  getDescription(){
    return this.description;
  }
  getVoyageById(id:number){
    return this.description.find(d=>d.id==id);
}
}
