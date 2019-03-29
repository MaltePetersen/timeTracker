import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptor} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutes} from './app. routes';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {CompanyService} from './services/company.service';
import {TimeEntryComponent} from './components/time-entry/time-entry.component';
import {TimeEntryService} from './services/time-entry.service';
import {TimeListComponent} from './components/time-list/time-list.component';
import {CompaniesListComponent} from './components/companies-list/companies-list.component';
import {
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatDividerModule,
  MatSidenavModule,  MatGridListModule
} from '@angular/material';
import {LoginComponent} from './components/login/login.component';
import {MatButtonModule} from '@angular/material';
import {TokenStorageService} from './services/token-storage.service';
import {AuthInterceptor} from './auth/AuthInterceptor';
import {LoginCommunicationService} from './services/login-communication.service';
import {AuthGuard} from './auth/AuthGuard';
import {LogoutComponent} from './components/logout/logout.component';
import {UserStorageService} from './services/user-storage.service';
import {ControllingComponent} from './components/controlling/controlling.component';
import {TimeListChildDeleteComponent} from './components/time-list/time-list-child-delete/time-list-child-delete.component';
import {TimeEntryChangeComponent} from './components/time-list/time-entry-change/time-entry-change.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimeEntryComponent,
    TimeListComponent,
    CompaniesListComponent,
    LoginComponent,
    LogoutComponent,
    ControllingComponent,
    TimeListChildDeleteComponent,
    TimeEntryChangeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    HttpClientModule,
    AppRoutes,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule
  ],
  providers: [
    AuthGuard,
    CompanyService,
    UserStorageService,
    TimeEntryService,
    TokenStorageService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    LoginCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
