import { Component } from '@angular/core';
import { Istore } from '../../modules/istore';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected store: Istore;
  constructor() {
    this.store = {
      name: "name",
      imgUrl: "https://plus.unsplash.com/premium_vector-1724790120830-587ead1ffa26?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      branches: ['b1'.repeat(5), 'b2', 'b3']
    }
  }
}
