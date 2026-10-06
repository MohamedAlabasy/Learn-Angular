import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Products } from '../products/products';
import { ICategories } from '../../modules/icategories';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProducts } from '../../modules/iproducts';
import { IAddToCartEvent } from '../../interfaces/iadd-to-cart-event';
import { IBuyAll } from '../../interfaces/ibuy-all';
import { IRemoveFromCart } from '../../interfaces/iremove-from-cart';
import { NewProducts } from '../new-products/new-products';

@Component({
  imports: [Products, CommonModule, FormsModule, NewProducts],
  selector: 'app-orders',
  styleUrl: './orders.css',
  templateUrl: './orders.html',
})
export class Orders implements AfterViewInit {
  protected TotalQuantity: Map<number, number>;
  protected categories: ICategories[];
  protected selectedCategoryId: number;

  // tow way to do this
  // @ViewChild('productComponent') productComponent!: Products;
  @ViewChild(Products) productComponent!: Products;

  constructor() {
    this.TotalQuantity = new Map<number, number>();
    this.selectedCategoryId = 0;
    this.categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
      { id: 4, name: 'Category 4' },
      { id: 5, name: 'Category 5' }
    ]
  }

  ngAfterViewInit(): void {
    console.log('product component: ', this.productComponent);
  }

  protected getTotalQuantity(): number {
    let total = 0;
    for (const quantity of this.TotalQuantity.values()) {
      total += quantity;
    }
    return total;
  }

  protected addToCart(event: IAddToCartEvent): void {
    if (event.productQuantity > 0 && event.productQuantity >= event.quantity) {
      this.TotalQuantity.set(event.productId, (this.TotalQuantity.get(event.productId) || 0) + event.quantity);
    }
  }

  protected buyAll(event: IBuyAll): void {
    if (event.quantity > 0) {
      this.TotalQuantity.set(event.productId, event.quantity);
    }
  }

  protected removeFromCart(event: IRemoveFromCart): void {
    if ((this.TotalQuantity.get(event.productId) || 0) > 0 && (this.TotalQuantity.get(event.productId) || 0) >= event.quantity) {
      this.TotalQuantity.set(event.productId, (this.TotalQuantity.get(event.productId) || 0) - event.quantity);
    }
  }
}
