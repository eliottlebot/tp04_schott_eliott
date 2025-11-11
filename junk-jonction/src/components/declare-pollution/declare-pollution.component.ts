import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PollutionFormComponent } from '../pollution-form/pollution-form.component';
import { PollutionService } from '../../services/pollution.service';
import { Pollution } from '../../models/types/Pollution';

@Component({
  selector: 'app-declare-pollution',
  imports: [PollutionFormComponent],
  templateUrl: './declare-pollution.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarePollutionComponent {
  constructor(private pollutionService: PollutionService) {}

  onFormSubmit(formData: Pollution) {
    formData.date_observation = new Date(formData.date_observation);
    this.pollutionService.createPollution(formData).subscribe((response) => {
      console.log('Pollution reported successfully:', response);
      alert('Pollution reported successfully!');
    });
  }
}
