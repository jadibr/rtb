import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UserEventModule } from "./user-event/user-event.module"
import { MongooseModule } from "@nestjs/mongoose"
import { ConfigModule } from "@nestjs/config"
import { UserEventsReportModule } from "./user-events-report/user-events-report.module"

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.DB_URL}/rtb`, {
      user: "rtb-api",
      pass: process.env.DB_PASSWORD,
      connectTimeoutMS: 5000,
    }),
    UserEventModule,
    UserEventsReportModule,
  ],
})
export class AppModule {}
