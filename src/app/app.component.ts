import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kurs';
  pi = Math.PI;
  date = new Date();

  dog = new Dog("Spajki", 12);

  showDog() : string {
    return 'Mój pies to ' + this.dog.name + ' i ma ' + this.dog.age + ' lat';
  }
}


class Dog {
  constructor(public name: string, public age: number) {

  }
}
