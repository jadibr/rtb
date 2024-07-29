import { Component } from '@angular/core'
import { RandomDataService } from "../services/random-data.service"
import { RandomUser } from "../interfaces/random-user.interface"
import { UserEventService } from "../services/user-event.service"
import { UserEventType } from "../../enums/user-event-type"
import { VisibleDirective } from "../visible.directive"


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [VisibleDirective],
  templateUrl: './home.page.html',
  styleUrl: './home.page.sass'
})
export class HomePage {

  public paragrapsAndLinesLenghts: number[] = []
  public loremLine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  public randomUser: RandomUser | undefined = undefined
  public infoMessage: string | undefined = undefined
  public isNewUser = true

  constructor(
      private randomDataService: RandomDataService,
      private userEventService: UserEventService) {}

  public async ngOnInit(): Promise<void> {

    this.infoMessage = "⏳ Loading user data..."
    const storageRandomUser = sessionStorage.getItem("randomUser")

    if (storageRandomUser == null) {
      try {
        this.randomUser = await this.randomDataService.getUser()
      } catch (err) {
        this.infoMessage = "Failed to load user data 😐"
        return
      }
      sessionStorage.setItem("randomUser", JSON.stringify({id: this.randomUser?.id, avatar: this.randomUser?.avatar}))
    } else {
      this.isNewUser = false
      this.randomUser = JSON.parse(storageRandomUser)
    }
   
    this.userEventService.create({ userId: Number(this.randomUser?.id), eventType: UserEventType.HomePageLoad })
    this.infoMessage = "⏳ Loading user image..."
    if (this.randomUser) await this.preloadImg(this.randomUser.avatar)
    this.infoMessage = undefined

    for (let i = 0; i < this.getRandomNumberBetween20and30(); i++) {
      this.paragrapsAndLinesLenghts.push(this.getRandomNumberBetween20and30())
    }
  }

  public getRandomNumberBetween20and30(): number {
    return this.getRandomNumber(20, 30)
  }

  public padLineNumber(input: string): string {
    return input.padStart(2, "0")
  }

  public imageVisible(): void {
    try {
      this.userEventService.create({ userId: Number(this.randomUser?.id), eventType: UserEventType.ImageShown })
    } catch {}
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private preloadImg(url: string): Promise<void> {
    return new Promise((res) => {
      const img = new Image()
      img.src = url
      img.onload = () => res()
    })
  }
}
