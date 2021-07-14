import { Component } from '@angular/core';
import { ActivatedRoute, OutletContext, Router } from '@angular/router';

import { MessageService } from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-plaground';
  constructor (
    private router: Router,
    private ar: ActivatedRoute,
    public messageService: MessageService
  ) {
    console.log(this.router.routerState);
  }

  displayMessages() {
    this.router.navigate([{ outlets: { popup: ['message'] } }]);
    this.messageService.isDisplayed = true;
  }

  hideMessages() {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}
