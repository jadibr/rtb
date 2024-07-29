import { Test, TestingModule } from "@nestjs/testing"
import { UserEventsReportService } from "./user-events-report.service"

describe("UserEventsReportService", () => {
  let service: UserEventsReportService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEventsReportService],
    }).compile()

    service = module.get<UserEventsReportService>(UserEventsReportService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
