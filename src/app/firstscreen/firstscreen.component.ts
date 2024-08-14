import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.component.html',
  styleUrls: ['./firstscreen.component.scss'],
})
export class FirstscreenComponent implements OnInit {
  isloading = true;
  private carouselInstance: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.isloading = false; // Change isloading to false after 1 second

      // Since isloading is now false, we wait for the DOM to update and then initialize the carousel
      setTimeout(() => {
        this.initializeCarousel();
      }, 0);
    }, 1000);
  }

  initializeCarousel() {
    console.log('🟢 initializeCarousel');
    const carouselElement = document.querySelector('#carouseltest');
    if (carouselElement) {
      console.log('🟢 carouselElement');
      this.carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        pause: false,
      });
      if (this.carouselInstance) {
        this.carouselInstance.to(0);
        this.carouselInstance.cycle();
      }
    }
  }
}
