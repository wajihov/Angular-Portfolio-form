import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './portfolio/about/about.component';
import { PresentationComponent } from './portfolio/presentation/presentation.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { CompetanceComponent } from './portfolio/competance/competance.component';
import { CertificationComponent } from './portfolio/certification/certification.component';
import { InteretComponent } from './portfolio/interet/interet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './portfolio/side-nav/side-nav.component';
import { FormComponent } from './portfolio/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MyModelModernComponent } from './portfolio/my-model-modern/my-model-modern.component';
import { NavbarApplicationComponent } from './navbar-application/navbar-application.component';
import { Routes, RouterModule } from "@angular/router"

const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'contact', component: FormComponent },
  { path: 'portfolio' , component: PortfolioComponent},
  // {
  //    path: 'portfolio', component: PortfolioComponent, children: [
  //     { path: 'about', component: AboutComponent },
  //     { path: 'presentation', component: PresentationComponent  },
  //     { path: 'experience', component: ExperienceComponent },
  //     { path: 'competance', component: CompetanceComponent },
  //     { path: 'certification', component: CertificationComponent },
  //     { path: 'interet', component: InteretComponent }
  //   ]
  // }
  {
    path: 'portfolio/', component: PortfolioComponent, children: [
      { path: 'about', component: AboutComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'competance', component: CompetanceComponent },
      { path: 'certification', component: CertificationComponent },
      { path: 'interet', loadChildren: './interet/interet.module#interet' }
    ]
  } 

]

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    PresentationComponent,
    ExperienceComponent,
    CompetanceComponent,
    CertificationComponent,
    InteretComponent,
    NavbarComponent,
    SideNavComponent,
    FormComponent,

    MyModelModernComponent,

    NavbarApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
