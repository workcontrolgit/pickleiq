import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating.component';
import { FormComponent } from './form/form.component';
import { ReportcardComponent } from './reportcard/reportcard.component';

import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
// import { NgbdModalComponent } from '../../@shared/components/modal/modal-component';

const model20 = { level: '2.0' };
const model25 = { level: '2.5' };
const model30 = { level: '3.0' };
const model35 = { level: '3.5' };
const model40 = { level: '4.0' };
const model45 = { level: '4.5' };
const model50 = { level: '5.0' };

const routes: Routes = [
  {
    path: '',
    component: RatingComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Ratings') },
  },
  {
    path: 'level20',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 2.0 Players'), model: model20 },
  },
  {
    path: 'level25',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 2.5 Players'), model: model25 },
  },
  {
    path: 'level30',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 3.0 Players'), model: model30 },
  },
  {
    path: 'level35',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 3.5 Players'), model: model35 },
  },
  {
    path: 'level40',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 4.0 Players'), model: model40 },
  },
  {
    path: 'level45',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 4.5 Players'), model: model45 },
  },
  {
    path: 'level50',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 5.0 Players'), model: model50 },
  },
  {
    path: 'reportcard',
    component: ReportcardComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment Report Card') },
  },
  // {
  //   path: 'modal',
  //   component: NgbdModalComponent,
  //   //canActivate: [AuthGuard],
  //   data: { title: marker('Skill Assessment Report Card') },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingRoutingModule {}
