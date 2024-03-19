import { Component, Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const LABEL_CONFIG = new InjectionToken<any>('label-config');


@Component({
  selector: 'lib-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent {
  constructor(@Inject(LABEL_CONFIG) private config: any) { }

}
