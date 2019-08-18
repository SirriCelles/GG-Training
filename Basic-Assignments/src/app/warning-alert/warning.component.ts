import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    templateUrl:'./warning.component.html' 
})

export class WarningAlertComponent {
    
    constructor () {}
    
    warningMessage() {
        alert('You clicked WARNING!');
    }
}