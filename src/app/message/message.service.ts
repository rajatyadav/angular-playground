import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: string[] = [
    'message 1',
    'message 2',
    'message 3',
    'message 4',
    'message 5',
  ]
  isDisplayed = false;
  
  get messages(): string[] {
    return this._messages;
  }
}
