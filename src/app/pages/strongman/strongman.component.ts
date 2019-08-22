import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-strongman',
  templateUrl: './strongman.component.html',
  styleUrls: ['./strongman.component.scss']
})
export class StrongmanComponent implements OnInit {
  text = ''
  constructor(private http: HttpClient) {
    this.http
      .get('assets/text/test.txt', { responseType: 'text' })
      .subscribe(data => console.log(data))
  }

  ngOnInit() {}
}
