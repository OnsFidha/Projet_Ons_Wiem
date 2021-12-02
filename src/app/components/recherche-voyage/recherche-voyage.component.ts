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
  F: FormGroup=new FormGroup({});
  constructor(private activatedRoute:ActivatedRoute,
private voyageService:VoyageService) { }
Voyage:Voyage[]=[];
  ngOnInit(): void {
    this.F = this.activatedRoute.snapshot.params['f.value'];
    // this.Voyage=this.voyageService.getVoyageByRecherche(this.F.controls.value);
  }

}
