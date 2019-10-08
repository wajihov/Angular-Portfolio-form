import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './portfolio/form/form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormulaireComponent } from './Form-contact/formulaire/formulaire.component';
import { ListContactComponent } from './Form-contact/list-contact/list-contact.component';
import { ModifContactComponent } from './form-contact/modif-contact/modif-contact.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'contact', component: FormComponent },
  { path: 'portfolio', component: PortfolioComponent },
  {
    path: 'formulaire', component: FormContactComponent, children: [
      { path: 'contactForm', component: FormulaireComponent },
      { path: 'modif/:id', component: ModifContactComponent },
      { path: 'list', component: ListContactComponent },
      { path: '', component: FormulaireComponent }      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
