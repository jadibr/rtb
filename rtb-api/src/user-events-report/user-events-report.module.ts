import { Module } from "@nestjs/common"
import { UserEventsReportService } from "./user-events-report.service"
import { UserEventsReportController } from "./user-events-report.controller"
import { UserEventModule } from "src/user-event/user-event.module"

@Module({
  controllers: [UserEventsReportController],
  providers: [UserEventsReportService],
  imports: [UserEventModule],
})
export class UserEventsReportModule {}
