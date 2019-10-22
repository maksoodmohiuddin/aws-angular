import { Component } from '@angular/core';
import API from '@aws-amplify/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-angular';

  sendEmail() {
    let apiName = 'restapi'; // replace this with your api name.
    let path = '/items'; //replace this with the path you have configured on your API
    let myInit = {
      body: {}, // replace this with attributes you need
      headers: {} // OPTIONAL
    }

    API.post(apiName, path, myInit).then(response => {
      // Add your code here
      alert('Email Sent!');
      console.log(response);
    }).catch(error => {
      alert('Error sending email');
      console.log(error.response)
    });
  }

  
}
