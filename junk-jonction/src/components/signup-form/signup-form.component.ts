import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecapFormComponent } from '../recap-form/recap-form.component';
import { take } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup-form',
  imports: [FormsModule, ReactiveFormsModule, FormsModule, RecapFormComponent],
  templateUrl: './signup-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent implements OnInit {
  @Input() formTitle: string = 'Créer un compte';
  showRecap: boolean = false;

  signupFormGroup: FormGroup = new FormGroup({});

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.signupFormGroup = new FormGroup({
      login: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      nom: new FormControl(''),
      prenom: new FormControl(''),
    });
  }

  onSubmit(): void {
    if (!this.checkFormData()) {
      alert('Please fill in all required fields.');
      return;
    }
    this.userService
      .signup(this.signupFormGroup.value)
      .pipe(take(1))
      .subscribe((userData) => {
        console.log('User signed up:', userData);
        this.showRecap = true;
      });
  }

  handleResetForm(): void {
    this.signupFormGroup.reset();
    this.showRecap = false;
  }

  checkFormData(): boolean {
    return (
      this.signupFormGroup.value.login &&
      this.signupFormGroup.value.pass &&
      this.signupFormGroup.value.confirmPassword
    );
  }
}
