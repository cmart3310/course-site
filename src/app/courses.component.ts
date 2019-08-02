import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
  selector: 'app-courses',
  template: `
    {{ text | summary: 10 }}
  `
})

export class CoursesComponent {
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. V`;
}
