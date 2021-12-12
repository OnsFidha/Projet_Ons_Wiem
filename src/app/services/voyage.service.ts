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
<<<<<<< HEAD
=======

>>>>>>> 8b2831d489560dab9c9bfdc429c43625c51022b2

  deleteVoyage(id:number){
    return this.http.delete(URLL+"/"+id);
  }
getVoyagesById(id:number):Observable<Voyage>{
  return this.http.get<Voyage>(`${URLL}/${id}`);
}
getVoyagesByName(name:string):Observable<Voyage[]>{
  return this.http.get<Voyage[]>(`${URLL}/?destination=${name}`);
}
ajouterVoyage(voyage:Voyage):Observable<Voyage>{
  return this.http.post<Voyage>(URLL,voyage);
}

modifierVoyage(id:number,voyage:Voyage):Observable<Voyage>{
  return this.http.put<Voyage>(URLL+"/"+id, voyage);
}

    }
