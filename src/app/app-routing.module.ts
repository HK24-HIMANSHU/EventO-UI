import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { EventPageComponent } from './component/event-page/event-page.component';
import { CreateEventComponent } from './component/create-event/create-event.component';
import { CreateCommunityComponent } from './component/create-community/create-community.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventPageComponent },
  { path: 'event/create', component: CreateEventComponent },
  { path: 'community/create', component: CreateCommunityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
