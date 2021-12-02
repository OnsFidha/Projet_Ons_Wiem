import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Avis } from 'src/app/model/avis';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup =new FormGroup({});
  onSubmit(){
    this.AvisService.addAvis(this.form.value)
    .subscribe (avis => this.a1.push(avis));
}
a1:Avis[]=[];
 lesAvis:Avis[]=[];
  constructor(private FormBuilder:FormBuilder,private AvisService:AvisService) { }
 
  ngOnInit(): void {
    this.form =this.FormBuilder.group(
      {nom:[''],
      prenom:[''],
      commentaire:['']
      }
      )
  
      this.AvisService.getAvis()
      .subscribe (av => this.a1 = av)
    }




}



