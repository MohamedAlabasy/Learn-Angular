import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProducts } from '../../modules/iproducts';
import { UpperCharacterPipe } from '../../pipes/upper-character-pipe';
import { HighlightCard } from '../../directives/highlight-card';
import { IAddToCartEvent } from '../../interfaces/iadd-to-cart-event';
import { IBuyAll } from '../../interfaces/ibuy-all';
import { IRemoveFromCart } from '../../interfaces/iremove-from-cart';

@Component({
  imports: [CommonModule, FormsModule, UpperCharacterPipe, HighlightCard],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit, OnChanges {
  protected products: IProducts[];
  protected filteredProducts: IProducts[];

  @Input('selectedCategoryId') selectedCategoryId: number;

  @Output() onAddToCart: EventEmitter<IAddToCartEvent>;
  @Output() onBuyAll: EventEmitter<IBuyAll>;
  @Output() onRemoveFromCart: EventEmitter<IRemoveFromCart>;


  constructor() {
    this.selectedCategoryId = 0;

    this.onAddToCart = new EventEmitter();
    this.onBuyAll = new EventEmitter();
    this.onRemoveFromCart = new EventEmitter();

    this.filteredProducts = this.products = [
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct(),
      this.getRandomProduct()
    ]
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.filterProductsByCategory();
  }


  ngOnInit(): void {
    this.selectedCategoryId = 1;
    this.filterProductsByCategory();
  }


  private getRandomProduct(): IProducts {
    const id: number = this.getRandomNumber(), imgNumber: number = this.getRandomNumber();
    return {
      id,
      name: `product ${id}`,
      img: `https://mdbcdn.b-cdn.net/img/new/standard/nature/1${imgNumber}.webp`,
      description: `description for product ${id}`,
      quantity: this.getRandomNumber(),
      price: this.getRandomNumber(),
      imgNumber,
      categoryId: this.getRandomCategoryId()
    }
  }

  protected addToCart(product: IProducts, quantity: number): void {
    if (product.quantity > 0 && product.quantity >= quantity) {
      const index = this.products.findIndex(p => p.id === product.id);
      index !== -1 ? this.products[index].quantity -= quantity : null;
      this.onAddToCart.emit({ productId: product.id, productQuantity: product.quantity, quantity });
    }
  }


  protected buyAll(product: IProducts): void {
    if (product.quantity > 0) {
      const index = this.products.findIndex(p => p.id === product.id);
      this.onBuyAll.emit({ productId: product.id, quantity: product.quantity })
      index !== -1 ? this.products[index].quantity = 0 : null;
    }
  }


  protected removeFromCart(product: IProducts, quantity: number): void {
    const index = this.products.findIndex(p => p.id === product.id);
    index !== -1 ? this.products[index].quantity += quantity : null;
    this.onRemoveFromCart.emit({ productId: product.id, quantity: quantity })
  }



  private getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  private getRandomCategoryId(): number {
    return [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
  }

  private filterProductsByCategory(): void {
    if (this.selectedCategoryId == 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.categoryId == this.selectedCategoryId);
    }
  }

}
