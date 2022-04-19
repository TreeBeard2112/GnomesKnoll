import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    "flower1.jpeg",
    "flower2.jpeg",
    "flower3.jpeg",
    "flower4.jpeg",
    "flower5.jpeg",
    "flower6.jpeg",
    "flower7.jpeg",
    "flower8.jpeg",
    "flower9.jpeg",
    "flower10.jpeg",
    "flower11.jpeg",
    "flower12.jpeg",
    "flower13.jpeg",
    "stone1.jpg",
    "stone2.jpg",
    "stone3.jpg",
    "stone4.jpg",
    "stone5.jpg",
    "stone6.jpg",
    "stone7.jpg"
  ]

  index = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextImage(): void {
    if (this.index < this.images.length) { this.index++;}
    else {this.index = 0;}
    
  }

}
