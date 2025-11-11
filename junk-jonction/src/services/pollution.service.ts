import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PollutionService {
  existingPollutions: Pollution[] = [
    {
      pollutionTitle: 'Déversement d’huile',
      description: 'Pollution sur la plage nord.',
      date: new Date('2025-10-20'),
      pollutionType: 'Hydrocarbures',
      place: 'Plage Nord',
      latitude: 43.6,
      longitude: 1.44,
    },
    {
      pollutionTitle: 'Fumée dense',
      description: 'Incendie dans la zone industrielle.',
      date: new Date('2025-10-21'),
      pollutionType: 'Air',
      place: 'Zone industrielle',
      latitude: 43.62,
      longitude: 1.45,
    },
  ];

  constructor() {
    console.log('PollutionService initialized with API URL:', environment.apiURL);
  }

  createPollution(pollution: Pollution): Observable<Pollution> {
    this.existingPollutions.push(pollution);
    return of(pollution);
  }

  getPollutions(): Observable<Pollution[]> {
    return of(this.existingPollutions);
  }

  getPollutionDetail(title: string): Observable<Pollution | undefined> {
    const pollution = this.existingPollutions.find((p) => p.pollutionTitle === title);
    return of(pollution);
  }

  updatePollution(updatedPollution: Pollution): Observable<Pollution> {
    const index = this.existingPollutions.findIndex(
      (p) => p.pollutionTitle === updatedPollution.pollutionTitle
    );
    if (index !== -1) {
      this.existingPollutions[index] = updatedPollution;
    }
    return of(updatedPollution);
  }

  deletePollution(title: string): Observable<boolean> {
    const index = this.existingPollutions.findIndex((p) => p.pollutionTitle === title);
    if (index !== -1) {
      this.existingPollutions.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
