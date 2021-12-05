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

  
    getVoyages():Observable<Voyage[]>{
      return this.http.get<Voyage[]>(URLL);
    }
}
