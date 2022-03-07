import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    "blue-sky.jpg",
    "dirt.jpg",
    "flowers.jpg",
    "karen.jpg",
    "richard.jpg"
  ]

  index = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextImage(): void {
    if (this.index < this.images.length - 1) { this.index++;}
    else {this.index = 0;}
    
  }

}
