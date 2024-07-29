import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

import { firstValueFrom } from "rxjs"

import { RandomUser } from '../interfaces/random-user.interface'


@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  private static userRandomDataUrl = "https://random-data-api.com/api/v2/users"

  constructor(
      private http: HttpClient) { }

  public async getUser(): Promise<RandomUser> {
    try {
      return await firstValueFrom(this.http.get<RandomUser>(RandomDataService.userRandomDataUrl))
    } catch (err) {
      throw new Error("Failed to retrieve random user data")
    }
  }
}
