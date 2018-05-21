import { StudentService } from './../../../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  appForm : FormGroup;
  error = [];
  constructor(
    public student: StudentService,
    public router: Router
  ) { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
      'first_name': new FormControl(null, [Validators.required]),
      'last_name': new FormControl(null, [Validators.required]),
      'course': new FormControl(null, [Validators.required]),
      'year': new FormControl(null, [Validators.required]),
      'contact': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
    });
  }

  studentNewSubmit(){
    this.student.studentAdd(this.appForm.value).subscribe(
      (res)=> {
        if(res['status']){
          this.router.navigate(['/students']);
        }else{
          console.log("bad");
        }
      },
      (err)=> {
        this.handleError(err.error);
      }
    )
    console.log(this.appForm.value);

  }

  handleError(error){
    console.log(this.error = error.errors);
    return this.error = error.errors;
  }

}
