import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    // left to right
    trigger('animation1', [
      state('open', style({
        opacity: 1,
        transform: 'translateX(300px)',
        width: '100px'
      })),
      state('closed', style({
        display: 'none',
        opacity: 1,
        transform: 'translateX(-300px)',
        width: '100px'
      })),
      state('any', style({
        display: 'none',
        transform: 'translateX(-300px)',
        width: '100px'
      })),
        transition('* => closed', [
        animate('0.5s')
      ]),
        transition('* => open', [
        animate('0.3s')
      ]),
      transition('* => any', [
        animate('0s')
      ]),
    ]),
    // bottom to top
    trigger('animation2', [
      state('open', style({
        bottom: 0,
        opacity: 1,
        transform: 'translateY(-300px)',
        width: '100px'
      })),
      state('closed', style({
        bottom: 0,
        display: 'none',
        opacity: 1,
        transform: 'translateY(300px)',
        width: '100px'
      })),
      state('any', style({
        bottom: 0,
        display: 'none',
        transform: 'translateY(300px)',
        width: '100px'
      })),
        transition('* => closed', [
        animate('0.5s')
      ]),
        transition('* => open', [
        animate('0.3s 250ms')
      ]),
      transition('* => any', [
        animate('0s')
      ]),
    ]),
    // right to left
    trigger('animation3', [
      state('open', style({
        opacity: 1,
        right: 0,
        transform: 'translateX(-300px)',
        width: '100px'
      })),
      state('closed', style({
        display: 'none',
        opacity: 1,
        right: 0,
        transform: 'translateX(300px)',
        width: '100px'
      })),
      state('any', style({
        display: 'none',
        right: 0,
        transform: 'translateX(300px)',
        width: '100px'
      })),
        transition('* => closed', [
        animate('0.5s')
      ]),
        transition('* => open', [
        animate('0.3s 550ms')
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
