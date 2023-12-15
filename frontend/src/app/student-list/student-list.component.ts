import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from 'src/models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router,
    ) {}

  ngOnInit() : void {
    this.getData();
  }

  onDelete(student: Student){
    if(confirm("Confirm to delete student record: " + student.id +" " + student.name)) {
      console.log("Implement delete functionality here");
      this.studentService.deleteStudentById(student.id).subscribe(
        (resp) => {
          // console.log(resp);
          this.getData();
        });
    }
  }

  getData(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  } 
}
