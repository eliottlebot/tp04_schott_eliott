import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { POLLUTION_FIELDS } from '../../models/config/field-config';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { latLongValidator } from '../../models/validators/latitude-longitude.validator';

@Component({
  selector: 'app-pollution-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './pollution-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollutionFormComponent implements OnInit {
  @Input() formTitle = 'Pollution Form';
  @Output() submitForm = new EventEmitter<Pollution>();
  formGroup: FormGroup = new FormGroup({});
  pollutionTypes: string[] = ['Plastique', 'Chimique', 'Dépôt sauvage', 'Eau', 'Air', 'Autre'];
  pollutionFields = POLLUTION_FIELDS;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      description: new FormControl('', Validators.required),
      pollutionTitle: new FormControl('', Validators.required),
      pollutionType: new FormControl(this.pollutionTypes[0], Validators.required),
      date: new FormControl(null, Validators.required),
      place: new FormControl('', Validators.required),
      latitude: new FormControl('', [Validators.required, latLongValidator()]),
      longitude: new FormControl('', [Validators.required, latLongValidator()]),
      photo: new FormControl(''),
    });
  }

  onSubmit() {
    this.submitForm.emit(this.formGroup.value);
  }
}
