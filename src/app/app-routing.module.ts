import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './portfolio/form/form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormContactComponent } from './form-contact/form-contact.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'contact', component: FormComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'formulaire', component: FormContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
