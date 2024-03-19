import { Component, Input } from '@angular/core';

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

  constructor() {}

}
