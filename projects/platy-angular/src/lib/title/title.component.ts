import { Component, Inject, Input } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const TITLE_CONFIG = new InjectionToken<any>('title-config');

@Component({
  selector: 'lib-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() dynamicClass!: string; 
  @Input() dynamicLabel!: string; 

  public config: any; 

  constructor(@Inject(TITLE_CONFIG) config: any) {
    this.config = config;
  }
}
