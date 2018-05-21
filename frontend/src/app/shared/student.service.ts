import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class StudentService {
    base = 'http://127.0.0.1:8000/api/student/';
    constructor(
        public http : HttpClient
    ){}

    studentAdd(studentData : any){
        return this.http.post(this.base+'add',studentData).map(
            (res)=> res = res,
        )
    }

    studentGet(){
        return this.http.get(this.base+'get').map(
            (res)=> res = res,
        )
    }
}