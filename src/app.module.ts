import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsService } from "./cats/cats.service";
import { ProductsService } from "./products/products.service";
import { CatsModule } from "./cats/cats.module";
import { CoffesController } from "./coffes/coffes.controller";
import { CoffesService } from "./coffes/coffes.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "pass123",
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, CoffesController],
  providers: [AppService, CatsService, ProductsService, CoffesService],
})
export class AppModule {}
