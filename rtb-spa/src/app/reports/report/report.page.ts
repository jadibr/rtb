import { Component } from '@angular/core'
import { UserEventReportsService } from "../../services/user-event-reports.service"
import { UserEventsReport } from "../../interfaces/user-events-report.interface"

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.page.html',
  styleUrl: './report.page.sass'
})
export class ReportPage {

  public userEventReportData: UserEventsReport | undefined = undefined
  public infoMessage: string | undefined = undefined
  public percentageWhoScrolled: string = "0"

  constructor(
      private userEventReportsService: UserEventReportsService) {}

  public async ngOnInit(): Promise<void> {
    this.infoMessage = "⏳ Loading report data..."

    this.userEventReportData = await this.userEventReportsService.get()
    this.percentageWhoScrolled = ((this.userEventReportData.imageShownUsersCount / this.userEventReportData.homePageLoadUsersCount) * 100).toFixed(2)

    this.infoMessage = undefined
  }
}
