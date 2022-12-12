import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Query,
  Patch,
} from "@nestjs/common";
import { CoffesService } from "./coffes.service";
import { CreateCoffeDto } from "./dto/create-coffe.dto/create-coffe.dto";
import { UpdateCoffeDto } from "./dto/update-coffe.dto/update-coffe.dto";

@Controller("coffes")
export class CoffesController {
  // dependency injection
  constructor(private readonly coffeesService: CoffesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll();
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.coffeesService.findOne(id);
  }
  @Post()
  create(@Body() createCoffeDto: CreateCoffeDto) {
    return this.coffeesService.create(createCoffeDto);
  }
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCoffeDto: UpdateCoffeDto) {
    return this.coffeesService.update(id, updateCoffeDto);
  }
}

// http exception filter
