import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api")
  // cors origin should be http://localhost:4200 when without docker
  app.enableCors({ origin: "http://localhost", methods: "GET,POST" })
  await app.listen(3000)
}
bootstrap()
