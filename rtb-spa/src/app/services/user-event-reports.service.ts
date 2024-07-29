import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core'

import { firstValueFrom } from "rxjs"

import { UserEventsReport } from "../interfaces/user-events-report.interface"
import { environment } from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class UserEventReportsService {

  private static resourceUrl = "/user-event-reports"

  constructor(
    private http: HttpClient) { }

  public async get(): Promise<UserEventsReport> {
    try {
      return await firstValueFrom(this.http.get<UserEventsReport>(
        `${environment.apiUr}${UserEventReportsService.resourceUrl}`
      ))
    } catch (err) {
      throw new Error("Failed to get user event report")
    }
  }
}
