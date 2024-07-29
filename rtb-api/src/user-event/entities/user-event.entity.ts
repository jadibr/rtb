import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type UserEventDocument = HydratedDocument<UserEvent>

@Schema({ collection: "user-events" })
export class UserEvent {
  @Prop()
  userId: number

  @Prop()
  eventType: number
}

export const UserEventSchema = SchemaFactory.createForClass(UserEvent)
