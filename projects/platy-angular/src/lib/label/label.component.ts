import { Component, Inject, Input } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const LABEL_CONFIG = new InjectionToken<any>('label-config');


@Component({
  selector: 'lib-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
; 

  @Input() labelText!: string; 
  @Input() labelClass!: string; 


       constructor(){}

}
