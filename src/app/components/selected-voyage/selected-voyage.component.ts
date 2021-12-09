import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-selected-voyage',
  templateUrl: './selected-voyage.component.html',
  styleUrls: ['./selected-voyage.component.css']
})
export class SelectedVoyageComponent implements OnInit {

  lesVoyages:Voyage;
  identifiant:number=0;

  constructor(private voyageService:VoyageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
 
  this.identifiant = this.activatedRoute.snapshot.params['idd'];

  this.voyageService.getVoyagesById(this.identifiant)
  .subscribe (data =>this.lesVoyages=data);

  
  //  this.voyageService.getVoyages()
  //  .subscribe (()=>this.lesVoyages=this.lesVoyages.filter(l=>l.id==this.identifiant));
    
  }

  }
