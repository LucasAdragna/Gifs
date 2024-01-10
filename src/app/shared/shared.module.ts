import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LegazyImageComponent } from './components/legazy-image/legazy-image.component';

@NgModule({
  declarations: [SidebarComponent, LegazyImageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, LegazyImageComponent],
})
export class SharedModule {}
