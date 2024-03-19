import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { TitleComponent } from '../../projects/platy-angular/src/lib/title/title.component';
import { LabelComponent } from '../../projects/platy-angular/src/lib/label/label.component';

import { TITLE_CONFIG, LABEL_CONFIG } from '../../projects/platy-angular/config.tokens';



const componentConfig = {
  titleConfig: {
    fontSize: '16px', 
    fontWeight: 'bold',
    color: '#333', 

  },
  labelConfig: {
    fontSize: '14px', 
    color: '#666', 
    
  }
};


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    TitleComponent,
    LabelComponent,
     { provide: TITLE_CONFIG, useValue: componentConfig.titleConfig },
     { provide: LABEL_CONFIG, useValue: componentConfig.labelConfig }
  
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
