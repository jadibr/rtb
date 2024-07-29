import { UserEventType } from "src/enums/user-event-tyoe.enum"

export interface UserEvent {
  userId: number
  eventType: UserEventType
}
