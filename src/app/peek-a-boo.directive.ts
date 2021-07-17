import { Directive, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';
// counter
let nextId = 1;
@Directive({
  // dove lo applico
  selector: '[appPeekABoo]',
})
export class PeekABooDirective implements OnInit {
  // funzione che mi permette di prendere il metodo dentro all loggerservice e mettere un messaggio custom, in questo caso 'OnInit'
  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
  constructor(private logger: LoggerService) {}
  ngOnInit() {
    this.logIt(`OnInit`);
  }
}
