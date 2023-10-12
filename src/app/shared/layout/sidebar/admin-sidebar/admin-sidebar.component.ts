import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styles: [],
})
export class AdminSidebarComponent {
  @Output() clickedMenuItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  clickMenuItem() {
    this.clickedMenuItem.emit();
  }
}
