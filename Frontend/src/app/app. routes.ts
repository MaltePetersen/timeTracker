import {Routes, RouterModule} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import {TimeEntryComponent} from './components/time-entry/time-entry.component';
import {TimeListComponent} from './components/time-list/time-list.component';
import {CompaniesListComponent} from './components/companies-list/companies-list.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth/AuthGuard';
import {LogoutComponent} from './components/logout/logout.component';
import {ControllingComponent} from './components/controlling/controlling.component';


const routes: Routes = [

  {
    path: 'controlling',
    component: ControllingComponent,
    canActivate: [AuthGuard]

  },
  {
    path: '',
    component: CalendarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'timeEntry',
    component: TimeEntryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'timeList',
    component: TimeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'companiesList',
    component: CompaniesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  }
];
export const AppRoutes = RouterModule.forRoot(routes);



