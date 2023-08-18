import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  alert: boolean = false;
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private restoService: RestoService) { }

  ngOnInit(): void {
  }

  collection(): void {
    console.warn(this.register.value);
    this.restoService.registerUser(this.register.value).subscribe(
      (_result: any) => {
        this.alert = true;
      }
    );
  }

  closeAlert(): void {
    this.alert = false;
  }
}
