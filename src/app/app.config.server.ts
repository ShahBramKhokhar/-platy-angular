import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { TitleComponent } from '../../projects/platy-angular/src/lib/title/title.component';
import { LabelComponent } from '../../projects/platy-angular/src/lib/label/label.component';

import { TITLE_CONFIG, LABEL_CONFIG, WORK_CONFIG } from '../../projects/platy-angular/config.tokens';
import { WorkComponent } from '../../projects/platy-angular/src/lib/work/work.component';



const componentConfig = {
  titleConfig: {
    fontSize: '16px', 
    fontWeight: 'bold',
    color: '#333', 

  },
  labelConfig: {
    fontSize: '14px', 
    color: '#666', 
    
  },
  workConfig:{
    fontSize: '15px',
    color: 'red'

  }
};


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    TitleComponent,
    LabelComponent,
    WorkComponent,
     { provide: TITLE_CONFIG, useValue: componentConfig.titleConfig },
     { provide: LABEL_CONFIG, useValue: componentConfig.labelConfig },
     { provide: WORK_CONFIG, useValue: componentConfig.workConfig }
   
  
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
