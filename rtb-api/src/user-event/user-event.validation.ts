import { z } from "zod"
import { UserEventType } from "src/enums/user-event-tyoe.enum"

export const createUserEventSchema = z
  .object({
    userId: z.number(),
    eventType: z.nativeEnum(UserEventType),
  })
  .required()

export type CreateUserDto = z.infer<typeof createUserEventSchema>
