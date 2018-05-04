import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
    .moreThan4 {
      color: white;
    }
  `]
})
export class DetailsComponent implements OnInit {

  detailsVisible=false;
  items = [];
  constructor() { }

  onClicked() {
    this.detailsVisible = !this.detailsVisible;
    this.items.push({
      action: this.detailsVisible?'Display':'Hide',
      when: new Date(), 
      index: this.items.length);
  }
}
