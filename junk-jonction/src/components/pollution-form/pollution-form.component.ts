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
import { Pollution } from '../../models/types/Pollution';

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
      titre: new FormControl('', Validators.required),
      type_pollution: new FormControl(this.pollutionTypes[0], Validators.required),
      date_observation: new FormControl(null, Validators.required),
      lieu: new FormControl('', Validators.required),
      latitude: new FormControl('', [Validators.required, latLongValidator()]),
      longitude: new FormControl('', [Validators.required, latLongValidator()]),
      photo_url: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('Form submitted with values:', this.formGroup.value);
    this.submitForm.emit(this.formGroup.value);
  }
}
