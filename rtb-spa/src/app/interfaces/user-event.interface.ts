import { UserEventType } from "../../enums/user-event-type"


export interface UserEvent {
  userId: number
  eventType: UserEventType
}
