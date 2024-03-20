import { Component, Input,  } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const WORK_CONFIG = new InjectionToken<any>('label-config');

@Component({
  selector: 'lib-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  @Input() work!: string;
  @Input() workClass!: string;

  constructor(){}

}
