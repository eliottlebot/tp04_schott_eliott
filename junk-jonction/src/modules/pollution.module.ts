import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeclarePollutionComponent } from '../components/declare-pollution/declare-pollution.component';
import { PollutionList } from '../components/pollution-list/pollution-list';
import { PollutionService } from '../services/pollution.service';

const routes = [
  { path: '', component: DeclarePollutionComponent },
  { path: 'list', component: PollutionList },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [PollutionService],
})
export class PollutionModule {}
