import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  submitted = false;
  postForm: FormGroup;
  needs:any = ['food', 'money', 'clothes', 'Medicines', 'others']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }
  

  mainForm() {
    this.postForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      adress: ['', [Validators.required]],
      situation : ['', [Validators.required]],
      need: ['', [Validators.required]]
      
    })
  }

  // Choose need with select dropdown
  updateNeed(e){
    this.postForm.get('need').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.postForm.controls;
  }

  onSubmit() {
   
      this.apiService.createPost(this.postForm.value).subscribe(
        (res) => {
          console.log('Post successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/post-list'))
        }, (error) => {
          console.log(error);
        });
        
    
  }

}
