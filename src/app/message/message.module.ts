import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: 'message',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ]
})
export class MessageModule { }
