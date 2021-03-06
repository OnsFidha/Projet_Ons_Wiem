
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-recherche-voyage',
  templateUrl: './recherche-voyage.component.html',
  styleUrls: ['./recherche-voyage.component.css']
})
export class RechercheVoyageComponent implements OnInit {
  
lesVoyages:Voyage[];
  dest:string;
 
 
  constructor(private activatedRoute:ActivatedRoute,
private voyageService:VoyageService) { }

  ngOnInit(): void {
  
    this.dest=this.activatedRoute.snapshot.params['desti'];
    this.dest=this.dest.toLowerCase();
 this.voyageService.getVoyagesByName(this.dest)
 .subscribe(data=>this.lesVoyages=data);
    
// this.voyageService.getVoyages()
// .subscribe(data => this.lesVoyages = data);
  
//  this.voyageService.getVoyages()
//  .subscribe (() => this.lesVoyages = this.lesVoyages.filter(l=>l.destination==this.dest));
}}
