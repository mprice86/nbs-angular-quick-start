import { Component, OnInit } from '@angular/core';

export interface Card {
  imageUrl: string;
  title: string;
  subTitle: string;
  content: string;
  action: Function;
}


@Component({
  selector: 'nbs-cards',
  templateUrl: './nbs-cards.component.html',
  styleUrls: ['./nbs-cards.component.scss']
})
export class NbsCardsComponent implements OnInit {
  public cards: Card[] = [
    {
      imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/171117103242-galaxy-soho-china.jpg',
      title: 'Sample title',
      subTitle: 'Sample subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      action: this.deleteCard,
    },
    {
      imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/171117103242-galaxy-soho-china.jpg',
      title: 'Sample title',
      subTitle: 'Sample subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      action: this.deleteCard,
    },
    {
      imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/171117103242-galaxy-soho-china.jpg',
      title: 'Sample title',
      subTitle: 'Sample subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      action: this.deleteCard,
    },
    {
      imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/171117103242-galaxy-soho-china.jpg',
      title: 'Sample title',
      subTitle: 'Sample subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      action: this.deleteCard,
    },
    {
      imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/171117103242-galaxy-soho-china.jpg',
      title: 'Sample title',
      subTitle: 'Sample subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      action: this.deleteCard,
    },
    {
      imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/171117103242-galaxy-soho-china.jpg',
      title: 'Sample title',
      subTitle: 'Sample subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      action: this.deleteCard,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  public deleteCard(event: Event) {
    (<HTMLElement>event.target).remove();
  }
}
