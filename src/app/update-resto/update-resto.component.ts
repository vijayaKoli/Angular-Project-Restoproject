import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent {
  alert:boolean= false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this['resto'].getCurrentResto(this.router.snapshot.params['id']).subscribe( 
    (result: any) => {
      this.editResto.setValue({
        name: new (result['name']),
        email: new  (result['email']),
        address: new (result['address'])
        })
      })
  }
  collection()
  {
    console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value).subscribe((result)=>
    this.alert=true
    )

}

  closeAlert(): void {
  
    this.alert= false
  }

}


