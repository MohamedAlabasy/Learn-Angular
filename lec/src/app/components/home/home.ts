import { Component } from '@angular/core';
import { IProducts } from '../../modules/iproducts';
import { CurrencyPipe, NgFor, NgClass, NgIf, NgSwitchCase, NgSwitch, NgSwitchDefault } from '@angular/common';
import { ICategories } from '../../modules/icategories';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgFor, CurrencyPipe, FormsModule, NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected TotalQuantity: Map<number, number>;
  protected products: IProducts[];
  protected categories: ICategories[];
  protected selectedCategoryId: number = 1;

  constructor() {
    this.TotalQuantity = new Map<number, number>();
    this.selectedCategoryId = 0;
    this.products = [
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct()
    ]
    this.categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
      { id: 4, name: 'Category 4' },
      { id: 5, name: 'Category 5' }
    ]
  }

  protected getTotalQuantity(): number {
    let total = 0;
    for (const quantity of this.TotalQuantity.values()) {
      total += quantity;
    }
    return total;
  }


  protected addToCart(product: IProducts, quantity: number): void {
    if (product.quantity > 0 && product.quantity >= quantity) {
      const index = this.products.findIndex(p => p.id === product.id);
      index !== -1 ? this.products[index].quantity -= quantity : null;
      this.TotalQuantity.set(product.id, (this.TotalQuantity.get(product.id) || 0) + quantity);
    }
  }


  protected buyAll(product: IProducts): void {
    if (product.quantity > 0) {
      const index = this.products.findIndex(p => p.id === product.id);
      this.TotalQuantity.set(product.id, product.quantity);
      index !== -1 ? this.products[index].quantity = 0 : null;
    }
  }


  protected removeFromCart(product: IProducts, quantity: number): void {
    if ((this.TotalQuantity.get(product.id) || 0) > 0 && (this.TotalQuantity.get(product.id) || 0) >= quantity) {
      const index = this.products.findIndex(p => p.id === product.id);
      index !== -1 ? this.products[index].quantity += quantity : null;
      this.TotalQuantity.set(product.id, (this.TotalQuantity.get(product.id) || 0) - quantity);
    }
  }


  protected myNgForTracker(index: number, product: IProducts): number {
    return product.id + index;
  }


  private getRandomProduct(): IProducts {
    const id: number = this.getRandomNumber(), imgNumber: number = this.getRandomNumber();
    return {
      id,
      name: `Product ${id}`,
      img: `https://mdbcdn.b-cdn.net/img/new/standard/nature/1${imgNumber}.webp`,
      description: `Description for Product ${id}`,
      quantity: this.getRandomNumber(),
      price: this.getRandomNumber(),
      imgNumber,
      categoryId: this.getRandomCategoryId()
    }
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  private getRandomCategoryId(): number {
    return [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
  }

}
