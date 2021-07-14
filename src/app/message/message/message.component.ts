import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(
    private router: Router,
    public messageService: MessageService
  ) {
    console.log(this.router.routerState);
  }

  ngOnInit(): void {
  }

  close() {
    this.router.navigate([{ outlets: { popup: null } }])
    this.messageService.isDisplayed = false;
  }

}
