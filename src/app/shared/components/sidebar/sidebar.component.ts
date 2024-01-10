import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) {
    this.searchTag;
  }

  get history() {
    if (this.GifsService.TagHistory.length === 0) return;
    return [...this.GifsService.TagHistory];
  }
  searchTag(tag: string) {
    this.GifsService.searchgTag(tag);
  }
}
