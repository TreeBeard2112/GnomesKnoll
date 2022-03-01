import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router ) {}

    galleryNav(){
      this.router.navigateByUrl('/gallery');
    }

    infoNav(){
      this.router.navigateByUrl('/info');
    }

  ngOnInit(): void {
  }

}
