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

  days = ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota', 'Niedziela'];
  
  dogs = new Array<Dog>();

  addDogs() {
    this.dogs.push(new Dog('Reksio', 4), new Dog('Łatek', 3), new Dog('Maksiu', 5));
  }

  removeDogs() {
    for(let i = 0; i<=this.dogs.length + 1; i++){
      this.dogs.pop()
    }
  }
}

class Dog {
  constructor(public name: string, public age: number) {

  }
}
