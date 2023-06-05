import { Component } from '@angular/core';
import { GiftService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // Private giftsService
  constructor(private giftsServices: GiftService) {}

  get tags() {
    return this.giftsServices.tagsHistory;
  }
}
