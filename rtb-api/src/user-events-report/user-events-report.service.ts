import { Injectable } from "@nestjs/common"
import { UserEventsReport as IUserEventsReport } from "./user-events-report.interface"
import { UserEventService } from "src/user-event/user-event.service"
import { UserEventType } from "src/enums/user-event-tyoe.enum"

@Injectable()
export class UserEventsReportService {
  constructor(private readonly userEventService: UserEventService) {}

  public async generate(): Promise<IUserEventsReport> {
    const eventsReportAggregation =
      await this.userEventService.getUserEventsReport()

    const result: IUserEventsReport = {
      homePageLoadUsersCount: 0,
      imageShownUsersCount: 0,
    }

    for (const eventAggregation of eventsReportAggregation) {
      switch (eventAggregation.eventId) {
        case UserEventType.HomePageLoad:
          result.homePageLoadUsersCount = eventAggregation.eventCount
          break
        case UserEventType.ImageShown:
          result.imageShownUsersCount = eventAggregation.eventCount
          break
        default:
          console.warn(
            `Not handling event ${eventAggregation.eventId} in UserEventsReportService.generate`,
          )
          break
      }
    }

    return result
  }
}
