import { StudentService } from './../../shared/student.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

 students = [];
 search : string;
  constructor(
    public router: Router,
    public student: StudentService
  ) { }

  ngOnInit() {
    this.student.studentGet().subscribe(
      (res)=> {
        this.students = res['data'];
        console.log(res);
      },
      (err)=> console.log(err)
    )
  }

  studentNew(){
    this.router.navigate(['/students-new']);
  }
  

  

}
