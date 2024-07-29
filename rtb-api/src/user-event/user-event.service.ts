import { Injectable } from "@nestjs/common"
import { CreateUserEventDto } from "./dto/create-user-event.dto"
import { InjectModel } from "@nestjs/mongoose"
import { UserEvent } from "./entities/user-event.entity"
import { UserEvent as IUserEvent } from "./user-event.interface"
import { Model } from "mongoose"
import { userEventsReportAggregation } from "./user-events-report-aggregation.interface"

@Injectable()
export class UserEventService {
  constructor(
    @InjectModel(UserEvent.name) private userEventModel: Model<UserEvent>,
  ) {}

  public async create(
    createUserEventDto: CreateUserEventDto,
  ): Promise<IUserEvent> {
    const userEvent = new this.userEventModel(createUserEventDto)
    await userEvent.save()
    return createUserEventDto
  }

  public async getUserEventsReport(): Promise<userEventsReportAggregation[]> {
    return await this.userEventModel.aggregate<userEventsReportAggregation>([
      {
        // grouping by userId and eventId to avoid duplicates - multiple events by the same user are treated
        // as one distinct event in the report
        $group: {
          _id: {
            user: "$userId",
            event: "$eventType",
          },
        },
      },
      // grouping by eventId to get the count of distinct events
      {
        $group: {
          _id: "$_id.event",
          eventCount: { $count: {} },
        },
      },
      // projection to rename the property names of the final object
      {
        $project: {
          _id: false,
          eventId: "$_id",
          eventCount: true,
        },
      },
    ])
  }
}
