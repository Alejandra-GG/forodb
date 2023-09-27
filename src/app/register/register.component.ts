import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email=""
  pass=""
  showError=false
  showLoading=false

  constructor(private router: Router, private api: ApiRestService){}
  register(){
    this.showLoading=true
    console.log(this.email)
    console.log(this.pass)
    this.api.register(this.email, this.pass).subscribe({
      next:Response => {
        this.router.navigate(['/login']);
      },
      error:e => {
        console.log(e)
        this.showError=true
        this.showLoading=false
      }
    })
 }
}
