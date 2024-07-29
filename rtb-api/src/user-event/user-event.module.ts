import { Module } from "@nestjs/common"
import { UserEventService } from "./user-event.service"
import { UserEventController } from "./user-event.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { UserEvent, UserEventSchema } from "./entities/user-event.entity"

@Module({
  controllers: [UserEventController],
  providers: [UserEventService],
  imports: [
    MongooseModule.forFeature([
      { name: UserEvent.name, schema: UserEventSchema },
    ]),
  ],
  exports: [UserEventService],
})
export class UserEventModule {}
