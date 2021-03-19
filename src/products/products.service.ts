import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService { 

    products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(
            prodId,
            title,
            description,
            price
        );
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getProduct(id: string) {
        const product =  this.products.find((prod) => prod.id == id);
        return {...product};
    }

   
}
