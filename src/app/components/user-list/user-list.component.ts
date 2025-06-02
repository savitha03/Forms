import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  @Input() userArray!: any[];
  // @Input() userLists!: any[];

  @Input() userLists: any[] = [];

  @Output() actionEmittter = new EventEmitter();

  deleteUser(userId: number) {
    const payload = {
      type: 'DELETE',
      id: userId,
    };
    this.actionEmittter.emit(payload);
  }

  editUser(userId: number) {
    const payload = {
      type: 'UPDATE',
      id: userId,
    };
    this.actionEmittter.emit(payload);
  }
}
