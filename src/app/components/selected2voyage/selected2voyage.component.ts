import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-selected2voyage',
  templateUrl: './selected2voyage.component.html',
  styleUrls: ['./selected2voyage.component.css']
})
export class Selected2voyageComponent implements OnInit {
  lesVoyages:Voyage[]=[];
  identifiant:number=0;
  constructor(private voyageService:VoyageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id2'];

    this.voyageService.getVoyages()
    .subscribe (data=>this.lesVoyages=data);
    this.voyageService.getVoyages()
    .subscribe (()=>this.lesVoyages=this.lesVoyages.filter(l=>l.id==this.identifiant));
  }

}
