import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Post} from 'src/app/model/post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  postData: Post[];
  needs:any = ['food', 'money', 'clothes', 'Medicines', 'others']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updatePost();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPost(id);
    this.editForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      adress: ['', [Validators.required]],
      situation : ['', [Validators.required]],
      need: ['', [Validators.required]]
    })
  }

  updateNeed(e) {
    this.editForm.get('need').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getPost(id) {
    this.apiService.getPost(id).subscribe(data => {
      this.editForm.setValue({
        first_name: data['first_name'],
        last_name: data['last_name'],
        email: data['email'],
        phone: data['phone'],
        situation: data['situation'],
        adress: data['adress'],
        need: data['need']
      });
    });
  }

  updatePost() {
    this.editForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      adress: ['', [Validators.required]],
      situation : ['', [Validators.required]],
      need: ['', [Validators.required]]
    })
  }


  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatePost(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/post-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
