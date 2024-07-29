import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

import { firstValueFrom } from "rxjs"

import { UserEvent } from "../interfaces/user-event.interface"
import { environment } from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  private static resourceUrl = "/user-events"

  constructor(
      private http: HttpClient) { }

  public async create(userEvent: UserEvent): Promise<UserEvent> {
    try {
      return await firstValueFrom(this.http.post<UserEvent>(
        `${environment.apiUr}${UserEventService.resourceUrl}`,
        userEvent
      ))
    } catch (err) {
      throw new Error("Failed to create user event")
    }
  }
}
