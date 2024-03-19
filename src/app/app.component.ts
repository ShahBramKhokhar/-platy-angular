import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "../../projects/platy-angular/src/lib/title/title.component";
import { LibModule } from '../../projects/platy-angular/src/lib/lib.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      TitleComponent,
      LibModule
    
    ]
})
export class AppComponent {
  title = 'platy';
}
