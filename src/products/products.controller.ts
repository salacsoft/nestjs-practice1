import { Controller,Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDescription: string, 
        @Body('price') prodPrice: number
    ): any {
         const generatedId = this.ProductsService.insertProduct(prodTitle, prodDescription, prodPrice);
         return {id: generatedId};
    }

    @Get()
    getAllProducts() {
        return this.ProductsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.ProductsService.getProduct(id);
    }

}
