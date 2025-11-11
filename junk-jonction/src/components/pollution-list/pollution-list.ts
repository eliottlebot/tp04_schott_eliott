import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PollutionService } from '../../services/pollution.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { LucideAngularModule, Trash2, Info } from 'lucide-angular';

@Component({
  selector: 'app-pollution-list',
  imports: [AsyncPipe, DatePipe, LucideAngularModule],
  templateUrl: './pollution-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollutionList {
  pollutionList$: Observable<Pollution[]>;
  Trash = Trash2;
  Info = Info;

  constructor(private pollutionService: PollutionService) {
    this.pollutionList$ = this.pollutionService.getPollutions();
  }

  deletePollution(title: string) {
    this.pollutionService.deletePollution(title).subscribe(() => {
      this.pollutionList$ = this.pollutionService.getPollutions();
    });
  }

  showDetails(title: string) {
    this.pollutionService.getPollutionDetail(title).subscribe((pollution) => {
      if (pollution) {
        alert(
          `Title: ${pollution.pollutionTitle}\nDescription: ${
            pollution.description
          }\nDate: ${pollution.date.toDateString()}\nType: ${pollution.pollutionType}\nPlace: ${
            pollution.place
          }\nLatitude: ${pollution.latitude}\nLongitude: ${pollution.longitude}`
        );
      } else {
        alert('Pollution details not found.');
      }
    });
  }

  sortByDate() {
    this.pollutionList$ = this.pollutionList$.pipe(
      map((pollutions) =>
        [...pollutions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      )
    );
  }

  resetSorting() {
    this.pollutionList$ = this.pollutionService.getPollutions();
  }
}
