import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './users-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersList {
  users$ = new BehaviorSubject<UserData[] | null>(null);
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users$.next(users);
    });
  }
}
