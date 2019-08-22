import { Component, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  safeURL: SafeResourceUrl
  videoURL = 'https://www.youtube.com/embed/PzkiNG-DS18'
  users = [
    {
      name: 'Petar',
      city: 'Beograd',
      gender: 'M',
      image: '../../../assets/images/hanibal.jpg'
    }
  ]

  constructor(private sanitizer: DomSanitizer) {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL)
  }

  ngOnInit() {}
}
