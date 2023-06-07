import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { EventPageComponent } from './component/event-page/event-page.component';
import { MemberdisplayComponent } from './component/memberdisplay/memberdisplay.component';
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
    EventPageComponent,
    MemberdisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
