import { Component } from '@angular/core';
import { educationData, resume, resumeData, studies } from 'src/assets/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  resume: resume[] = resumeData;

  education: studies[] = educationData;
}
