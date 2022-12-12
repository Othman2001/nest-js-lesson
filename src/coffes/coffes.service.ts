import { Injectable } from "@nestjs/common";
import { Coffe } from "./entities/coffe.entity";

@Injectable()
export class CoffesService {
  private coffees: Coffe[] = [
    {
      id: 1,
      name: "Shipwreck Roast",
      brand: "Buddy Brew",
      flavors: ["chocolate", "vanilla"],
    },
  ];
  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }
  findAll() {
    return this.coffees;
  }
  create(createCoffeDto: any) {
    this.coffees.push(createCoffeDto);
  }
  update(id: string, updateCoffeDto: any) {
    const existingCoffe = this.findOne(id);
    if (existingCoffe) {
      // update the existing entity
    }
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
