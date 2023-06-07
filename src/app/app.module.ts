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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, MainLayoutComponent],
})
export class AppModule { }
