import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-legazy-image',
  templateUrl: './legazy-image.component.html',
})
export class LegazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('No se encuentra el url.');
  }
   onLoad() {
     this.hasLoaded = true;
 }
}
