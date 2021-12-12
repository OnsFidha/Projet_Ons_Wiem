import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Voyage } from '../model/voyage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URLL="http://localhost:3000/voyages"

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  
  constructor(private http: HttpClient) { }

  
getVoyages():Observable<Voyage[]>{
  return this.http.get<Voyage[]>(URLL);}


getVoyagesById(id:number):Observable<Voyage>{
  return this.http.get<Voyage>(`${URLL}/${id}`);
}
getVoyagesByName(name:string):Observable<Voyage[]>{
  return this.http.get<Voyage[]>(`${URLL}/?destination=${name}`);
}
ajouterVoyage(voyage:Voyage):Observable<Voyage>{
  return this.http.post<Voyage>(URLL,voyage);
}
deleteVoyage(id:number){
  return this.http.delete(URLL+"/"+id);
}
modifierVoyage(id:number,voyage:Voyage):Observable<Voyage>{
  return this.http.put<Voyage>(URLL+"/"+id, voyage);
}

    }
