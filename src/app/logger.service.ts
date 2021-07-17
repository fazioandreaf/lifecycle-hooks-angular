import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  // inizializzazione
  logs: string[] = [];
  prevMsg = '';
  prevMsgCount = 1;

  constructor() {}
  log(msg: string) {
    if (msg === this.prevMsg) {
      this.logs[this.logs.length - 1] = msg + ` (${(this.prevMsgCount += 1)}x)`;
    } else {
      // nuovo messaggio del logger
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }
  clear() {
    this.logs = [];
  }
  tick() {
    this.tick_then(() => {});
  }
  tick_then(fn: () => any) {
    setTimeout(fn, 0);
  }
}
