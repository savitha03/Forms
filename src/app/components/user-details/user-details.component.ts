import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  @Input() isUpdate!: boolean;

  @Input() UserDetails: any;

  @Output() actionEmitter = new EventEmitter();

  submitDetails() {
    const load = {
      type: 'SUBMIT',
      value: this.UserDetails,
    };
    this.actionEmitter.emit(load);
  }

  updateDetails() {
    const load = {
      type: 'UPDATE',
      value: this.UserDetails,
    };

    this.actionEmitter.emit(load);
  }
}
