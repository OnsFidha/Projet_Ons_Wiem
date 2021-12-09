import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdmineService } from 'src/app/services/admine.service';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  infosAdmin:Admin[];
  adminForm=new FormGroup({});
  constructor(
    private http:HttpClient,
    private fb:FormBuilder,
    private adminService:AdmineService,
    private router:Router
    ) {}

    onAuthentifier(){
       if(this.adminForm.controls['login'].value==this.infosAdmin[0].login && 
       this.adminForm.controls['password'].value==this.infosAdmin[0].password)
       {
        this.router.navigate(['/traitement']);
       }
       else{
        alert("Login ou Password incorrect \nRéessayez!");
      }
    }
    
  ngOnInit(): void {

    this.adminService.getInfosAdmin()
    .subscribe(
      infos => this.infosAdmin = infos
    )   
    
      this.adminForm=this.fb.group({
        login:["login"],
        password:["*******"]
      })

      
    
  }
  



  

}
