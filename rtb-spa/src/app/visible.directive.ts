import { Directive, ElementRef, EventEmitter, Output } from '@angular/core'

@Directive({
  selector: '[visible]',
  standalone: true
})
export class VisibleDirective {

  private observer: IntersectionObserver
  @Output() isVisible = new EventEmitter<boolean>()

  constructor(private element: ElementRef) {
    this.observer = new IntersectionObserver((elements) => {
      elements.forEach((el) => {
        if (el.isIntersecting) {
          this.isVisible.emit(true)
          this.observer.unobserve(this.element.nativeElement)
          return
        }
      })
      
    })
    this.observer.observe(this.element.nativeElement)
  }

}
