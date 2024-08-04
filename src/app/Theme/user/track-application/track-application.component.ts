import { Component } from '@angular/core';

@Component({
  selector: 'app-track-application',
  templateUrl: './track-application.component.html',
  styleUrls: ['./track-application.component.css'],
})
export class TrackApplicationComponent {
  summary: boolean = false;

  showSummary() {
    this.summary = true;
  }
  hideSummary() {
    this.summary = false;
  }
}
