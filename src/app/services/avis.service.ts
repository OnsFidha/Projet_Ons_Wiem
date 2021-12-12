import { Injectable } from '@angular/core';
import { Avis } from '../model/avis';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/avis";
@Injectable({
  providedIn: 'root'
})
export class AvisService {
 
    deleteAvis(id:number){
      return this.http.delete(URL+"/"+id);
    }
  public getAvis():Observable<Avis[]>{
    return this.http.get<Avis[]>(URL);
  }

  public addAvis(a:Avis):Observable<Avis>{
    return this.http.post<Avis>(URL,a);
  }

  constructor(private http:HttpClient) { }
}
