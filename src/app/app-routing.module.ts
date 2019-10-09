import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './portfolio/form/form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormulaireComponent } from './Form-contact/formulaire/formulaire.component';
import { ListContactComponent } from './Form-contact/list-contact/list-contact.component';
import { ModifContactComponent } from './form-contact/modif-contact/modif-contact.component';
import { AuthGuard } from './ngApp/auth.guard';
import { AppService } from './service/app.service';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponentComponent } from './special-events-component/special-events-component.component';

const routes: Routes = [
  { path: '', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard] },
  {
    path: 'formulaire', component: FormContactComponent, canActivate: [AuthGuard], children: [
      { path: 'contactForm', component: FormulaireComponent },
      { path: 'modif/:id', component: ModifContactComponent },
      { path: 'list', component: ListContactComponent },
      { path: '', component: FormulaireComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  // { path: 'special', component: SpecialEventsComponentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
