import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <table>
      <tr>
        <td [attr.colspan]="colSpan">dsffdsf</td>
      </tr>
    </table>
    <button class="btn btn-primary ">Save</button>
  `
})

export class CoursesComponent {
  title = 'List of courses';
  colSpan = 2;
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
