import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { PollutionService } from '../../services/pollution.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { LucideAngularModule, Trash2, Info } from 'lucide-angular';
import { Pollution } from '../../models/types/Pollution';
import { PollutionDetailsModal } from '../pollution-details-modal/pollution-details-modal';

@Component({
  selector: 'app-pollution-list',
  imports: [AsyncPipe, DatePipe, LucideAngularModule, PollutionDetailsModal],
  templateUrl: './pollution-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollutionList {
  pollutionList$: Observable<Pollution[]>;
  selectedPollution$ = new BehaviorSubject<Pollution | null>(null);
  Trash = Trash2;
  Info = Info;

  constructor(private pollutionService: PollutionService) {
    this.pollutionList$ = this.pollutionService.getPollutions();
  }

  deletePollution(id: number) {
    this.pollutionService.deletePollution(id).subscribe(() => {
      this.pollutionList$ = this.pollutionService.getPollutions();
    });
  }
  showDetails(id: number) {
    this.pollutionService.getPollutionDetail(id).subscribe((pollution) => {
      this.selectedPollution$.next(pollution);
    });
  }

  closeModal = () => {
    this.selectedPollution$.next(null);
  };

  sortByDate() {
    this.pollutionList$ = this.pollutionList$.pipe(
      map((pollutions) =>
        [...pollutions].sort(
          (a, b) => new Date(b.date_observation).getTime() - new Date(a.date_observation).getTime()
        )
      )
    );
  }

  resetSorting() {
    this.pollutionList$ = this.pollutionService.getPollutions();
  }
}
