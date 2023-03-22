import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLogged: boolean = false;
  isSigned: boolean = false;
  isWelcomeMain: boolean = true;

  loginClicked(login: boolean) {
    this.isLogged = login;
    this.isWelcomeMain = false;
  }

  signUpClicked(signUp: boolean) {
    this.isSigned = signUp;
    this.isWelcomeMain = false;
  }

  constructor() {}

  ngOnInit(): void {}

  // using API
  // title = 'httpGet Example';
  // people!: Person[];
  // person: Person = {
  //   id: 0,
  //   name: '',
  // };

  // constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   this.refreshPeople();
  // }

  // refreshPeople() {
  //   this.apiService.getPeople().subscribe((data) => {
  //     console.log(data);
  //     this.people = data;
  //   });
  // }

  // addPerson() {
  //   this.apiService.addPerson(this.person).subscribe((data) => {
  //     console.log(data);
  //     this.refreshPeople();
  //   });
  // }
}
