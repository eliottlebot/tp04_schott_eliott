import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PollutionFormComponent } from '../pollution-form/pollution-form.component';
import { PollutionService } from '../../services/pollution.service';

@Component({
  selector: 'app-declare-pollution',
  imports: [PollutionFormComponent],
  templateUrl: './declare-pollution.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarePollutionComponent {
  constructor(private pollutionService: PollutionService) {}

  onFormSubmit(formData: Pollution) {
    formData.date = new Date(formData.date);
    this.pollutionService.createPollution(formData).subscribe((response) => {
      console.log('Pollution reported successfully:', response);
      alert('Pollution reported successfully!');
    });
  }
}
