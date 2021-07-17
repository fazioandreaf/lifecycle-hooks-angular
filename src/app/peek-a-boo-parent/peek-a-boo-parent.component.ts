import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['./peek-a-boo-parent.component.scss'],
  providers: [LoggerService],
})
export class PeekABooParentComponent {
  private logger: LoggerService;
  hookLog: string[] = [];
  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }
  hasChild = false;
  heroName = 'Fazio';
  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Andrea';
      // metodo all interno del servizio
      this.logger.clear();
    }
    // lo trasferisco all interno del html e aumento il tick
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += 'Andrea';
    this.logger.tick();
  }
}
