// This component class was created with the cli generate component command.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  
  constructor() {}
  ngOnInit() {
  }
  
  successMessage () {
    alert('You Clicked Success Button');
  }
  

}
