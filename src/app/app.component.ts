import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public superheros: Observable<string> | undefined;
  public superheroName: string | undefined;

  ngOnInit(): void {

    this.superheros = new Observable(function (observer) {
      try {
        observer.next("Ironman");
        setInterval(() => {
          observer.next("Antman");
        }, 3000);
        setInterval(() => {
          observer.next("Spiderman");
        }, 6000);
      } catch (error) {
        observer.error(error);
      }
    });

    this.superheros.subscribe((data) => {
      this.superheroName = data;
    });

  }

}
