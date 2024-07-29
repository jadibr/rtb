import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common"
import { ZodSchema } from "zod"

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  public constructor(private schema: ZodSchema) {}

  transform(value: any) {
    try {
      const parsedValue = this.schema.parse(value)
      return parsedValue
    } catch (error) {
      throw new BadRequestException("Validation failed")
    }
  }
}
