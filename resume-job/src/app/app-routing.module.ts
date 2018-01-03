import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExportComponent } from './export/export.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'resume', component: ResumePreviewComponent },
  { path: 'export', component: ExportComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
