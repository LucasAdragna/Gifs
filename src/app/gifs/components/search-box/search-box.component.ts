import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h4>Buscar</h4>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Gifs"
      #inputSearch
      (keyup.enter)="searchTag()"
    />
  `,
})
export class SearchBoxComponent {
  constructor(private GifsService: GifsService) {}

  @ViewChild('inputSearch')
  public tagInput!: ElementRef<HTMLInputElement>;
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchgTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
