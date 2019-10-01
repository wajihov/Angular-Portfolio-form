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
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { SideNavComponent } from './portfolio/side-nav/side-nav.component';
import { FormComponent } from './portfolio/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MyModelModernComponent } from './portfolio/my-model-modern/my-model-modern.component';


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
    
    MyModelModernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
