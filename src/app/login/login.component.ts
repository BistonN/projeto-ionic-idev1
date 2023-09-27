import { Component, OnInit } from '@angular/core';
import { faCoffee, faAddressBook, faSynagogue } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  constructor() { }
  icons = {
    "faCoffee": faCoffee,
    "faAddressBook": faAddressBook,
    "faSynagogue": faSynagogue
  }
  ngOnInit() {}

}
