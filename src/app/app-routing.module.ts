import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './portfolio/form/form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'contact', component: FormComponent },
  { path: 'portfolio' , component: PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
