import { Component } from '@angular/core';
import { Iproducts } from '../../modules/iproducts';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Icategory } from '../../modules/icategory';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight';
import { UpperCasePipe } from '../../pipe/uper-case-pipe';

@Component({
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, Highlight, UpperCasePipe],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  protected filteredProducts: Iproducts[];
  protected readonly products: Iproducts[];
  protected readonly categories: Icategory[];
  protected totalPrice: number;
  protected categoryValue1: number;
  protected categoryValue2: number;

  constructor() {
    this.totalPrice = 0;
    this.categoryValue1 = 0;
    this.categoryValue2 = 0;
    this.categories = [
      { id: 1, name: 'cat 1' },
      { id: 2, name: 'cat 2' },
      { id: 3, name: 'cat 3' },
      { id: 4, name: 'cat 4' }
    ];
    this.filteredProducts = this.products = [
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 1, quantity: 11, catId: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 2, quantity: 22, catId: 2, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 3, quantity: 33, catId: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 3, quantity: 33, catId: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 3, quantity: 33, catId: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 3, quantity: 33, catId: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 3, quantity: 33, catId: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
      { id: Math.random() * 100, name: 'name' + (Math.random() * 100).toFixed(0), price: 3, quantity: 0, catId: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOnNx4YNAS51kAlcgcqT2bqOp2_CfZiLUrtiGTZ7Xpy-DntfRotYOqjA3&s=10" },
    ]
  }

  protected buy(count: number, price: number) {
    this.totalPrice += count * price
  }

  protected selectionCategoryValue1(value: number) {
    this.categoryValue1 = value;
    this.filteredProducts = this.products.filter(p => p.catId == this.categoryValue1);
  }

}
