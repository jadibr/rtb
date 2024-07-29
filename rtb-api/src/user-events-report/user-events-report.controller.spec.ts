import { Test, TestingModule } from "@nestjs/testing"
import { UserEventsReportController } from "./user-events-report.controller"
import { UserEventsReportService } from "./user-events-report.service"

describe("UserEventsReportController", () => {
  let controller: UserEventsReportController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEventsReportController],
      providers: [UserEventsReportService],
    }).compile()

    controller = module.get<UserEventsReportController>(
      UserEventsReportController,
    )
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })
})
