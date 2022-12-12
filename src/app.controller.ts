import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

// controlller handling incoming requests and returning response to client
// controller has more than one route and diffrent route canperform diffrent actions

@Controller("product")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
