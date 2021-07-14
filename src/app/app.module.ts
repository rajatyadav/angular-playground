import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

// For api calls
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { TemplateFormComponent } from './template-form/template-form.component';
// import { PatientsModule } from './patients/patients.module';
import { CaregiversModule } from './caregivers/caregivers.module';
import { MessageModule } from './message/message.module';
import { CssAnimationComponent } from './css-animation/css-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    PageNotFoundComponent,
    CssAnimationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { delay: 2000, dataEncapsulation: false }
    ),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MessageModule,
    ReactiveFormsModule,
    // PatientsModule,
    CaregiversModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function InMemoryDataService(InMemoryDataService: any, arg1: { dataEncapsulation: false; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

