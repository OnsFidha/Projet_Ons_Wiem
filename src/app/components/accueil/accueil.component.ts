import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  destinations:string[]=["Italie","Londres","Corée du sud"];
  datesA:Date[]=[new Date(2021,12,5),new Date(2022,1,14),new Date(2022,2,30)];
  datesR:Date[]=[new Date(2021,12,19),new Date(2022,1,21),new Date(2022,3,5)];
  onClick()
  {this.router.navigate(['/listVoyage']);
 
} 

f: FormGroup =new FormGroup({});
  constructor(private router:Router,private FormBuilder:FormBuilder) { }
Rechercher(){
 
}
  ngOnInit(): void {
    this.f =this.FormBuilder.group(
      {dest:[''],
      dateA:[''],
      dateR:[''],
      nouv:['']
      }
      )
   
  }

}
