import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  login = new FormControl('',Validators.required);
  pass = new FormControl('',Validators.required);
  
  registerForm = new FormGroup({
      login1 : new FormControl('',[Validators.required,Validators.minLength(6)]),
      pass1 : new FormControl('',[Validators.required,Validators.pattern('^[A-Z][a-z0-9]*$')])
    })
  

    save(){
      console.log(this.registerForm)
  
      }
}
