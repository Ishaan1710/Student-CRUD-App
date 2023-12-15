import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080'; // Your backend URL

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Student[]>(`${this.baseUrl}/getAllStudents`);
  }

  createStudent(student: Student): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addStudent`, student);
  }

  getStudentById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getById/${id}`);
  }

  deleteStudentById(id: any) {
    return this.http.delete(`${this.baseUrl}/deleteStudent?id=${id}`);
  }

  // Implement methods to add, update, and delete students
  /*
  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.listUrl).pipe(map(res => this.students = res));
  }

  export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    console.log("getstudents running");
    this.studentService.getStudents().subscribe(data=>this.students = data);
    console.log(this.students);
    console.log("displayed student");
  }

}

  */
}
