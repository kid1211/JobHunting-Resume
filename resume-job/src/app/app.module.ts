import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './/app-routing.module';
import { ResumeDataComponent } from './resume-data/resume-data.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { FormsModule } from '@angular/forms';
import { ExportComponent } from './export/export.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
/* Feature Modules */
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ResumeDataComponent,
    ResumePreviewComponent,
    DashboardComponent,
    ModalComponentComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ClipboardModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponentComponent
  ]
})
export class AppModule { }
