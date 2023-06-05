import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {

  form: FormGroup;
  submitted: boolean = false;

  formArray: FormGroup[] = [];


  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.form = this.createForm();
    this.formArray.push(this.form);
  }
  // submitForm() {
  //   if (this.form.valid) {
  //     this.submitted = true;
  //   }
  // } 
  // omited

    createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required]
    });
  }

  submitForm() {
    for (const form of this.formArray) {
        if (form.valid) {
        }
    }
}


  resetForm() {
    this.form.reset();
    
  }
  

  addForm() {
    const newForm = this.createForm();
    this.formArray.push(newForm);
}

}