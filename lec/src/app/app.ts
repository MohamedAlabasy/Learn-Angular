import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Orders } from './components/orders/orders';

@Component({
  imports: [
    // RouterOutlet,
    Navbar,
    Home,
    Footer,
    Orders
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('lec');

}
