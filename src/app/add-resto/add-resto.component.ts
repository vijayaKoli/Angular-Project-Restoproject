import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl}from '@angular/forms'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {
  alert: boolean= false

  addResto= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')

  })

  constructor(private resto:RestoService) { }
  
  

  collectResto()
  {
    this.resto.saveResto(this.addResto.value).subscribe(
      (result: any)=>{
        this.alert=true
    this.addResto.reset( { } )
      console.warn("result is here", result);
    
    },
    (error: any) => {
      console.error("An error occurred:", error)
    });
    this.alert=true
    this.addResto.reset( { } )
  }
  closeAlert()
  {
    this.alert=false
  }

}

