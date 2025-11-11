import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { UsersList } from '../users-list/users-list';

@Component({
  selector: 'app-users',
  imports: [SignupFormComponent, UsersList],
  templateUrl: './users.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {}
