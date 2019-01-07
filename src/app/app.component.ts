import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Roomex';

  hotels = [
    {
      title: 'Title A',
      address: '3077 Felicia Mountains Suite 466',
      price: 140,
      image: 'assets/img/task_photo.jpg'
    },
    {
      title: 'Title B',
      address: '3077 Felicia Mountains Suite 466',
      price: 150,
      image: 'assets/img/task_photo.jpg'
    },
    {
      title: 'Title C',
      address: '3077 Felicia Mountains Suite 466',
      price: 160,
      image: 'assets/img/task_photo.jpg'
    },
    {
      title: 'Title D',
      address: '3077 Felicia Mountains Suite 466',
      price: 170,
      image: 'assets/img/task_photo.jpg'
    },
    {
      title: 'Title E',
      address: '3077 Felicia Mountains Suite 466',
      price: 180,
      image: 'assets/img/task_photo.jpg'
    }
  ];
}
