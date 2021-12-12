import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-list-voyage',
  templateUrl: './list-voyage.component.html',
  styleUrls: ['./list-voyage.component.css']
})
export class ListVoyageComponent implements OnInit {
 
  constructor(private voyageService:VoyageService,private FormBuilder:FormBuilder) { }
  lesVoyages:Voyage[]=[];
  f:FormGroup;

  ngOnInit(): void {
  this.voyageService.getVoyages().subscribe (data=>this.lesVoyages =data);
  this.f =this.FormBuilder.group(
    {dest:['']
    }
    )
  }
  recherche(n:string){

    this.voyageService.getVoyagesByName(n.toLowerCase())
    .subscribe(
      data => this.lesVoyages=data
    )
  
    // this.voyageService.getVoyages()
    // .subscribe(
    //   () => this.lesVoyages=this.lesVoyages.filter(l=>l.prix>parseInt(p))
    // )
   
    }
  
}
