import { Test, TestingModule } from "@nestjs/testing";
import { CatsController } from "src/cats.controller";
import { CatsService } from "./cats.service";

describe("CatsService", () => {
  let service: CatsService;
  let catsController: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it("should finds all cats", async () => {});
});
