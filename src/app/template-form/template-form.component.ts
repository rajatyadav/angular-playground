import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  templateName = ''
  reactiveName = new FormControl({ value: '',  disabled: true});
  
  constructor() {}
  ngOnInit(): void {}

}
