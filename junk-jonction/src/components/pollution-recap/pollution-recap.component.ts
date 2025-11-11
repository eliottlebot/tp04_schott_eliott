import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pollution-recap',
  imports: [DatePipe],
  templateUrl: './pollution-recap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollutionRecapComponent {
  @Input() pollutionData: Pollution | null = null;
}
