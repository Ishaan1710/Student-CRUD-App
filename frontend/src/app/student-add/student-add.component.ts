import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  addForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      department: ['', Validators.required],
      phonenumber: ['', Validators.required]
    });
  }

  onSubmit() {
    // console.log('Form Valid:', this.addForm.valid);
    // console.log('Form Values:', this.addForm.value);
    this.studentService.createStudent(this.addForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
