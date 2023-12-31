import {
  style,
  trigger,
  state,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex += 1;
    }, 5000);

  }

  // observable
  movies$ = this.moviesService.getMoviesByType('popular');


  slideIndex = 0;
}
