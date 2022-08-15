import { Component } from '@angular/core';
import { Games } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linkingContents';
  games: Games[] = [
    new Games('The Witcher 3', 2015, 'CD Projekt red ', 'RPG', 'https://http2.mlstatic.com/D_NQ_NP_736245-MLA44387182842_122020-O.jpg' )
  ];
}
