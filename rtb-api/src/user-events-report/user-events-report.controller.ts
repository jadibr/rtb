import { Controller, Get } from "@nestjs/common"
import { UserEventsReportService } from "./user-events-report.service"

@Controller("user-event-reports")
export class UserEventsReportController {
  constructor(
    private readonly userEventsReportService: UserEventsReportService,
  ) {}

  @Get()
  public async get() {
    return await this.userEventsReportService.generate()
  }
}
