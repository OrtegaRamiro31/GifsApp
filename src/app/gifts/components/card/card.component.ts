import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifts-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gift;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
