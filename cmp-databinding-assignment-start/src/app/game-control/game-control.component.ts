import { 
  Component, 
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  running = false;
  count = 0;
  timer;
  
  @Output() tick: EventEmitter<{n: number}> = new EventEmitter<{n: number}>();
  
  constructor() { }

  ngOnInit() {
  }

  start() {
    this.timer = setInterval(() => {
      this.tick.emit({n: this.count++});
    }, 1000);
    this.running = true;
  }
  
  stop() {
    clearInterval(this.timer);
    this.running = false;
  }
}
