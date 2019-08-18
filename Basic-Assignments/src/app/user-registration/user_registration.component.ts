// This Component was created manually. It contains a simple user form

import { Component } from '@angular/core';

//calling the decorator function that takes an object
@Component({
    selector: 'app-regform',
    templateUrl: './user_registration.component.html',
    styleUrls: ['./user_registration.component.css']

    //it is worth noting that property == styleUrls: Array<string>
})
   
export class UserRegistrationComponent {
     name= '';
     age: any;
     username = '';
     btnConfirm = true;
     confirmInput;
    
     
    

     getName(event: Event) {
        return this.name = (<HTMLInputElement>event.target).value;
       
        //console.log(event);
     }

     getAge(event: Event) {
        return this.age = (<HTMLInputElement>event.target).value;
        
        
     }

//this method is called when a click event occurs in the user registration template.
    showName() {
        alert("Hello " + this.name + " You are: " + this.age + " years old.");
       
    }

    confirmName(event: Event) {
        //console.log(event);
        this.confirmInput = (<HTMLInputElement>event.target).value;

        if(this.confirmInput !== ''){
            setTimeout(() => {
                this.btnConfirm = false;
            },2000)
           
        }
        
    }

    resetStringInput(event: Event){
        this.username = '';
        setTimeout(() => {
            this.btnConfirm = true;
        },1000)
        
    }
    
}