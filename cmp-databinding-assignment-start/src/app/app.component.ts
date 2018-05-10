import { 
  Component,
  ElementRef
} from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parts: number[] = new Array<number>();
  onTick(event) {
    console.log(event.n);
    this.parts.push(event.n);
  }
}
