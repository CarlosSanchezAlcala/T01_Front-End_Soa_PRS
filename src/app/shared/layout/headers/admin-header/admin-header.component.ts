import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styles: [
    `
      .flex-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class AdminHeaderComponent {
  @Output() clickedMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  handleClickMenu() {
    this.clickedMenu.emit();
  }
}
