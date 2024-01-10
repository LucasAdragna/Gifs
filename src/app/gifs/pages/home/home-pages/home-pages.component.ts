import { Component } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/gifs.interface';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
})
export class HomePagesComponent {
  constructor(private GifsService: GifsService) {
   }
  
  get gifs():Gif[] {
    return this.GifsService.gifsList;
  }
}
