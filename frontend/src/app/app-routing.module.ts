import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'details/:id', component: StudentDetailsComponent } // New route for student details

  // { path: 'add', component: StudentAddComponent },
  // { path: 'update/:id', component: StudentUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
