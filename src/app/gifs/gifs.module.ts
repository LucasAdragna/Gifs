import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home/home-pages/home-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePagesComponent,
    SearchBoxComponent,
    CardListComponent,
    GifCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePagesComponent],
})
export class GifsModule {}
