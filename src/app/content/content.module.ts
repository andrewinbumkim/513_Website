import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent, TopNavComponent } from '../shared/index';

import { ContentComponent } from './content.component';
import { ContentRouting } from './content.routing';

@NgModule({
    declarations: [
        ContentComponent,
        TopNavComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        ContentRouting
    ]
})

export class ContentModule { }
