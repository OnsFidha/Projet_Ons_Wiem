import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup ,FormBuilder} from '@angular/forms';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-admin-traitement',
  templateUrl: './admin-traitement.component.html',
  styleUrls: ['./admin-traitement.component.css']
})
export class AdminTraitementComponent implements OnInit {

  lesVoyages:Voyage[]=[];
  voyageForm: FormGroup= new FormGroup({});
 


  constructor(private voyageService: VoyageService,
    private fb:FormBuilder) { }
    public get lesDescriptions()
{
return this.voyageForm.get('description')as FormArray;
}
onAfficherPreferences()
{for(let d of this.lesDescriptions.controls)
console.log(d.value);
}

  ngOnInit(): void {
    this.voyageForm = this.fb.group({
      img:["lien image"],
        destination:["destination"],
        continent :["continent"],
        dateAller: ["01/01/2001"],
        dateRetour: ["01/01/2080"],
        nbJ:[0],
        prix : [111],
        enPromo: [false],
        //description
        description:this.fb.array([
          this.fb.group({
          texte:["texte"],
          planning:["planning"],
          hotel:["hotel"],
          etoile:0})

        ]),
        
    })    
    

    this.voyageService.getVoyages()
    .subscribe(
      livres => this.lesVoyages = livres
    )
  }

  onSubmit(){
    this.voyageService.ajouterVoyage(this.voyageForm.value)
    .subscribe(
      data => this.lesVoyages.push(data)     
    )
  }

  onSupprimer(id:number){
    this.voyageService.deleteVoyage(id)
    .subscribe(
      ()=> this.lesVoyages = this.lesVoyages.filter(l => l.id != id)
    )
  }

  onModifier(id:number){
    this.voyageService.modifierVoyage(id, this.voyageForm.value)
    .subscribe(
      data => {
         let pos = this.lesVoyages.findIndex(v=> v.id == data.id)
         this.lesVoyages[pos]= this.voyageForm.value   

      }           
    )
  }
}
