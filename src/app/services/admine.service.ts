import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Admin } from '../model/admin';

const URL="http://localhost:3000/admin";
@Injectable({
  providedIn: 'root'
})
export class AdmineService {

  getInfosAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>(URL);
  }
  
  constructor(private http:HttpClient) { }
}
