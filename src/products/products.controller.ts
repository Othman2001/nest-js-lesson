import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(
    @Body("title") prodTtile: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number
  ): any {
    // this.productsService.insertProduct();
  }
  @Get(":id")
  findOne(@Param() params): string {
    console.log(params.id);
    return `this actions returns a #${params.id} cat`;
  }
}
