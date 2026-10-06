import { Service } from '@angular/core';
import { IProducts } from '../modules/iproducts';

@Service()
export class ProductService {
  protected products: IProducts[];

  constructor() {
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
  }

  getProducts(): IProducts[] {
    return this.products;
  }

  getProductById(id: number): IProducts | undefined {
    return this.products.find(product => product.id == id);
  }

  getProductByCategoryId(categoryId: number): IProducts[] | null {
    if (categoryId == 0) return this.products;
    const products = this.products.filter(product => product.categoryId == categoryId);
    return products.length ? products : null
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

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  private getRandomCategoryId(): number {
    return [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
  }

}
