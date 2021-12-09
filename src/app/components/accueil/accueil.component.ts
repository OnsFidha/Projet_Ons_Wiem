import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  lesVoyages:Voyage[];
 
 
  onClick()
  {
    this.router.navigate(['/listVoyage']);
} 



f: FormGroup =new FormGroup({});
  constructor(private router:Router,private FormBuilder:FormBuilder,private s:VoyageService) { }

  ngOnInit(): void {
    this.f =this.FormBuilder.group(
      {dest:['']
      }
      )
   
  }

}
