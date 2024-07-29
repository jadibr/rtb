import { Controller, Post, Body, UsePipes } from "@nestjs/common"
import { UserEventService } from "./user-event.service"
import { CreateUserEventDto } from "./dto/create-user-event.dto"
import { ZodValidationPipe } from "src/zod-validation/zod-validation.pipe"
import { createUserEventSchema } from "./user-event.validation"

@Controller("user-events")
export class UserEventController {
  constructor(private readonly userEventService: UserEventService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createUserEventSchema))
  async create(@Body() createUserEventDto: CreateUserEventDto) {
    return this.userEventService.create(createUserEventDto)
  }
}
