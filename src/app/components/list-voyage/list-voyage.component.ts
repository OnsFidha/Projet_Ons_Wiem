import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-list-voyage',
  templateUrl: './list-voyage.component.html',
  styleUrls: ['./list-voyage.component.css']
})
export class ListVoyageComponent implements OnInit {
 
  constructor(private voyageService:VoyageService,) { }
  lesVoyages:Voyage[]=[];
  

  ngOnInit(): void {
    this.lesVoyages=this.voyageService.getVoyages();
    
  }

}
