import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // Private giftsService
  constructor(private giftsService: GiftService) {}

  get tags(): string[] {
    return this.giftsService.tagsHistory;
  }

  searchTag(tag: string): void {
    this.giftsService.searchTag(tag);

    // this.tagButton.nativeElement.textContent = '';
  }
}
