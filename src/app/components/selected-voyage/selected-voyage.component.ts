import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Description } from 'src/app/model/description';
import { DescriptionService } from 'src/app/services/description.service';

@Component({
  selector: 'app-selected-voyage',
  templateUrl: './selected-voyage.component.html',
  styleUrls: ['./selected-voyage.component.css']
})
export class SelectedVoyageComponent implements OnInit {

  description:Description =new Description (0,"","","","",0);
  constructor(private descriptionServise:DescriptionService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let identifiant = this.activatedRoute.snapshot.params['id'];
    console.log(identifiant);
    this.description=this.descriptionServise.getVoyageById(identifiant) as Description;
    

  }

}
