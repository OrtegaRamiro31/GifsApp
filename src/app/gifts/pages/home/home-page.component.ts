import { Component } from '@angular/core';
import { GiftService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifts-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private giftService: GiftService) {}

  get gifts(): Gift[] {
    return this.giftService.giftList;
  }
}
