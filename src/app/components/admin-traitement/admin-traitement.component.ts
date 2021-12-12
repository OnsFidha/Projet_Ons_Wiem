import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup ,FormBuilder, FormControl, Validators} from '@angular/forms';
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

    get image(){
      return this.voyageForm.get('img');
    }
    get destination(){
      return this.voyageForm.get('destination');
    }
    get continent(){
      return this.voyageForm.get('continent');
    }
    get dateAller(){
      return this.voyageForm.get('dateAller');
    }
    get dateRetour(){
      return this.voyageForm.get('dateRetour');
    }
    get planning(){
      return this.voyageForm.get('planning');
    }
    get hotel(){
      return this.voyageForm.get('hotel');
    }
    get nbJ(){
      return this.voyageForm.get('nbJ');
    }
    get prix(){
      return this.voyageForm.get('prix');
    }
    get etoile(){
      return this.voyageForm.get('etoile');
    }
    isValidPattern():boolean{
      return this.voyageForm.controls['etoile'].errors?.['pattern'] &&
      this.voyageForm.controls['etoile'].dirty;
      }
      isValidPattern2():boolean{
        return this.voyageForm.controls['nbJ'].errors?.['pattern'] &&
        this.voyageForm.controls['nbJ'].dirty;
        }
     

  ngOnInit(): void {
    this.voyageForm = this.fb.group({

        img:["",Validators.required],
        destination:["",Validators.required],
        continent :["",Validators.required],
        dateAller: ["",Validators.required],
        dateRetour: ["",Validators.required],
        nbJ:[Validators.required, Validators.pattern('^([1-9]||[0-9][0-9])$')],
        prix : [Validators.required],
        enPromo: [false],
        planning:["",Validators.required],
        hotel:["",Validators.required],
        etoile:[Validators.required, Validators.pattern('^([1-5])$')],
        villes:this.fb.array([])
    })    
    
    this.voyageService.getVoyages()
    .subscribe(
      livres => this.lesVoyages = livres
    )
  }
}
