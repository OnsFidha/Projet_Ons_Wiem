import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
=======
import { ActivatedRoute, Router } from '@angular/router';
import { Description } from 'src/app/model/description';
import { DescriptionService } from 'src/app/services/description.service';
>>>>>>> 4337062786e12e626569a3a797f10fa52cbd11e4

@Component({
  selector: 'app-selected-voyage',
  templateUrl: './selected-voyage.component.html',
  styleUrls: ['./selected-voyage.component.css']
})
export class SelectedVoyageComponent implements OnInit {
<<<<<<< HEAD
  lesVoyages:Voyage[]=[];
  identifiant:number=0;
  constructor(private voyageService:VoyageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.identifiant = this.activatedRoute.snapshot.params['id'];

  this.voyageService.getVoyages()
  .subscribe (data=>this.lesVoyages=data);
  this.voyageService.getVoyages()
  .subscribe (()=>this.lesVoyages=this.lesVoyages.filter(l=>l.id==this.identifiant));
    
=======

  description:Description =new Description (0,"","","","",0);
  constructor(private descriptionServise:DescriptionService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let identifiant = this.activatedRoute.snapshot.params['id'];
    console.log(identifiant);
    this.description=this.descriptionServise.getVoyageById(identifiant) as Description;
    

>>>>>>> 4337062786e12e626569a3a797f10fa52cbd11e4
  }

}
