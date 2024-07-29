import { UserEventType } from "src/enums/user-event-tyoe.enum"

export class CreateUserEventDto {
  readonly userId: number
  readonly eventType: UserEventType
}
