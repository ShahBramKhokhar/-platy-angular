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
  @Input() dynamicClass!: string; 
  @Input() dynamicLabel!: string; 

  public config: any; // Making config property public

  constructor(@Inject(LABEL_CONFIG) config: any) {
    this.config = config;
  }

}
