import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup ,FormBuilder, FormControl} from '@angular/forms';
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

    onSubmit(){
      this.voyageService.ajouterVoyage(this.voyageForm.value)
      .subscribe(
        data => this.lesVoyages.push(data)     
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

    onSupprimer(id:number){
      this.voyageService.deleteVoyage(id)
      .subscribe(
        ()=> this.lesVoyages = this.lesVoyages.filter(l => l.id != id)
      )
    }
    public get lesVilles()
    {
      return this.voyageForm.get('villes') as FormArray;
    }

    onAjouterVille(){
      this.lesVilles.push(this.fb.control(''));
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
        planning:["planning"],
        hotel:["hotel"],
        etoile:[0],
        villes:this.fb.array([])
    })    
    
    this.voyageService.getVoyages()
    .subscribe(
      livres => this.lesVoyages = livres
    )
  }
}
