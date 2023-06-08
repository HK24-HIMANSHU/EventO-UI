import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { EventPostComponent } from './component/event-post/event-post.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NavbarMainComponent } from './component/navbar-main/navbar-main.component';
import { CommunityCardComponent } from './component/community-card/community-card.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { SearchboxComponent } from './component/searchbox/searchbox.component';
import { HomeFuncComponent } from './component/home-func/home-func.component';
import { EventPageComponent } from './component/event-page/event-page.component';
import { MemberdisplayComponent } from './component/memberdisplay/memberdisplay.component';
import { CreateEventComponent } from './component/create-event/create-event.component';
import { CreateCommunityComponent } from './component/create-community/create-community.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { CommunityPageComponent } from './component/community-page/community-page.component';
import { AllEventsComponent } from './component/all-events/all-events.component';
import { OwnerHomeComponent } from './component/owner-home/owner-home.component';
import { SpaceListingComponent } from './component/space-listing/space-listing.component';
import { SpaceCardComponent } from './component/space-card/space-card.component';
import { UserDisplayComponent } from './component/user-display/user-display.component';
import { OwnerloginComponent } from './component/ownerlogin/ownerlogin.component';
import { OwnerSignupComponent } from './component/owner-signup/owner-signup.component';
import { AllCommunitiesComponent } from './component/all-communities/all-communities.component';
import { CreateSpaceComponent } from './component/create-space/create-space.component';
import { SpaceDetailsComponent } from './component/space-details/space-details.component';
import { CommunityDetailsComponent } from './component/community-details/community-details.component';
import { OwnerNavbarComponent } from './component/owner-navbar/owner-navbar.component';
import { UserHomePageComponent } from './Components/user-home-page/user-home-page.component';
// import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EventPostComponent,
    SidebarComponent,
    NavBarComponent,
    NavbarMainComponent,
    CommunityCardComponent,
    DropdownComponent,
    SearchboxComponent,
    HomeFuncComponent,
    EventPageComponent,
    MemberdisplayComponent,
    CreateEventComponent,
    CreateCommunityComponent,
    MainLayoutComponent,
    MemberdisplayComponent,
    CommunityPageComponent,
    AllEventsComponent,
    OwnerHomeComponent,
    SpaceListingComponent,
    SpaceCardComponent,
    UserDisplayComponent,
    OwnerNavbarComponent,
    OwnerloginComponent,
    OwnerSignupComponent,
    SpaceCardComponent,
    AllCommunitiesComponent,
    CreateSpaceComponent,
    SpaceDetailsComponent,
    CommunityDetailsComponent,
    UserHomePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, MainLayoutComponent],
})
export class AppModule { }
