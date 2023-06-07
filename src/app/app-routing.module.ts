import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { EventPageComponent } from './component/event-page/event-page.component';
import { CreateEventComponent } from './component/create-event/create-event.component';
import { CreateCommunityComponent } from './component/create-community/create-community.component';
import { AllEventsComponent } from './component/all-events/all-events.component';
import { OwnerHomeComponent } from './component/owner-home/owner-home.component';
import { SpaceListingComponent } from './component/space-listing/space-listing.component';
import { OwnerloginComponent } from './component/ownerlogin/ownerlogin.component';
import { OwnerSignupComponent } from './component/owner-signup/owner-signup.component';
import { AllCommunitiesComponent } from './component/all-communities/all-communities.component';
import { CreateSpaceComponent } from './component/create-space/create-space.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'event/:id', component: EventPageComponent },
  { path: 'allevent', component: AllEventsComponent },
  { path: 'ownerhome', component: OwnerHomeComponent },
  { path: 'spacelisting', component: SpaceListingComponent },
  { path: 'allcommunity', component: AllCommunitiesComponent },
  // { path: 'events', component: EventPageComponent },

  { path: 'owner/login', component: OwnerloginComponent },
  { path: 'owner/signup', component: OwnerSignupComponent },
  { path: 'community/create', component: CreateCommunityComponent },
  { path: 'space/create', component: CreateSpaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
