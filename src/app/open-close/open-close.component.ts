import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('animation1', [
      state('open', style({
        width: '100px',
        opacity: 1,
        transform: 'translateX(300px)'
      })),
      state('closed', style({
        display: 'none',
        width: '100px',
        opacity: 1,
        transform: 'translateX(-300px)',
      })),
      state('any', style({
        width: '100px',
        display: 'none',
        transform: 'translateX(-300px)'
      })),
        transition('* => closed', [
        animate('1s')
      ]),
        transition('* => open', [
        animate('1s')
      ]),
      transition('* => any', [
        animate('0s')
      ]),
    ]),
  ],
})

export class OpenCloseComponent {
  data = {
    "properties": [
      {
        "index": 0,
        "name": "slide0"
      },
      {
        "index": 1,
        "name": "slide1"
      },
      {
        "index": 2,
        "name": "slide2"
      },
      {
        "index": 3,
        "name": "slide3"
      }
    ]
  }

  properties = this.data.properties;
  property = this.data.properties[0]; 
  isOpen = null;
  // prub
  isOpen1 = null;
  isOpen2 = null;
  isOpen3 = null;

  prevSlide = () => {
    const newIndex = this.property.index-1;
    this.property = this.properties[newIndex];
    console.log(this.property)

    switch(this.property.index) {
      case 0:
        this.isOpen1 = false;
        break;
      case 1:
        this.isOpen1 = true;
        this.isOpen2 = false;
        break;
      case 2:
        this.isOpen1 = false;
        this.isOpen2 = true;
        this.isOpen3 = false;
        break;
      case 3:
        this.isOpen2 = false;
        this.isOpen3 = true;
        break;
    }
  }

  nextSlide = () => {
    const newIndex = this.property.index+1;
    this.property = this.properties[newIndex]
    console.log(this.property)

    switch(this.property.index) {
      case 1:
        this.isOpen1 = true;
        this.isOpen2 = null;
        break;
      case 2:
        this.isOpen1 = false;
        this.isOpen2 = true;
        this.isOpen3 = false;
        break;
      case 3:
        this.isOpen2 = false;
        this.isOpen3 = true;
        break;
    }
  }

}
