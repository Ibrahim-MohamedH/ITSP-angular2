import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Theme/main/home/home.component';
import { AboutUsComponent } from './Theme/main/about-us/about-us.component';
import { ContactComponent } from './Theme/main/contact/contact.component';
import { PortfolioComponent } from './Theme/main/portfolio/portfolio.component';
import { ReelsComponent } from './Theme/main/reels/reels.component';
import { JobCategoriesComponent } from './Theme/jobs/job-categories/job-categories.component';
import { JobAvailableComponent } from './Theme/jobs/job-available/job-available.component';
import { JobDetailsComponent } from './Theme/jobs/job-details/job-details.component';
import { ProfileComponent } from './Theme/user/profile/profile.component';
import { EditProfileComponent } from './Theme/user/edit-profile/edit-profile.component';
import { TrackApplicationComponent } from './Theme/user/track-application/track-application.component';
import { Error404Component } from './Theme/error404/error404.component';
import { SoftwareHouseComponent } from './Theme/solutions/software-house/software-house.component';
import { DigitalMarketingComponent } from './Theme/solutions/digital-marketing/digital-marketing.component';
import { MarketingBusinessComponent } from './Theme/solutions/marketing-business/marketing-business.component';
import { ResourcesComponent } from './Theme/main/resources/resources.component';
import { ProjectComponent } from './Theme/main/project/project.component';
import { RegisterComponent } from './Theme/access/register/register.component';
import { LoginComponent } from './Theme/access/login/login.component';
import { OTPComponent } from './Theme/access/otp/otp.component';
import { RecoverEmailComponent } from './Theme/access/recover-email/recover-email.component';
import { ChangePasswordComponent } from './Theme/access/change-password/change-password.component';
import { ApplyFormComponent } from './Theme/jobs/apply-form/apply-form.component';
import { LanguageGuard } from './guards/language.guard';

const routes: Routes = [
  // Main Routes

  {
    path: ':lang',
    canActivate: [LanguageGuard],
    children: [
      { path: '', title: 'ITSP | Home', component: HomeComponent },
      { path: 'home', title: 'ITSP | Home', component: HomeComponent },
      {
        path: 'home/:sectionId',
        title: 'ITSP | Home',
        component: HomeComponent,
      },
      {
        path: 'aboutUs',
        title: 'ITSP | About us',
        component: AboutUsComponent,
      },
      {
        path: 'aboutUs/:sectionId',
        title: 'ITSP | About us',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        title: 'ITSP | Contact us',
        component: ContactComponent,
      },
      // {
      //   path: 'portfolio',
      //   title: 'ITSP | Portfolio',
      //   component: PortfolioComponent,
      // },
      // { path: 'reels', title: 'ITSP | Reels', component: ReelsComponent },
      // {
      //   path: 'reels/:sectionId',
      //   title: 'ITSP | Reels',
      //   component: ReelsComponent,
      // },
      // {
      //   path: 'resources',
      //   title: 'ITSP | Resources',
      //   component: ResourcesComponent,
      // },
      // {
      //   path: 'resources/:sectionId',
      //   title: 'ITSP | Resources',
      //   component: ResourcesComponent,
      // },
      // { path: 'project/:id', title: 'ITSP | Project', component: ProjectComponent },
      // Jobs Routes
      {
        path: 'careers',
        title: 'ITSP | Career',
        component: JobCategoriesComponent,
      },
      {
        path: 'jobs/:id',
        title: 'ITSP | Career',
        component: JobAvailableComponent,
      },
      {
        path: 'job/:id',
        title: 'ITSP | Career',
        component: JobDetailsComponent,
      },
      {
        path: 'apply/:id',
        title: 'ITSP | Apply For Job',
        component: ApplyFormComponent,
      },
      // Access Routes
      // { path: 'register', title: 'Register', component: RegisterComponent },
      // { path: 'login', title: 'Login', component: LoginComponent },
      // {
      //   path: 'otp',
      //   title: 'One Time Password',
      //   component: OTPComponent,
      // },
      // {
      //   path: 'change_password',
      //   title: 'Change Password',
      //   component: ChangePasswordComponent,
      // },
      // {
      //   path: 'recover_password',
      //   title: 'Recover Password',
      //   component: RecoverEmailComponent,
      // },
      // User Routes
      // { path: 'profile', title: 'ITSP | Profile', component: ProfileComponent },
      // {
      //   path: 'edit_profile',
      //   title: 'ITSP | Profile',
      //   component: EditProfileComponent,
      // },
      // {
      //   path: 'track_applications',
      //   title: 'ITSP | Applications',
      //   component: TrackApplicationComponent,
      // },
      // Houses
      {
        path: 'software-house',
        title: 'ITSP | Software House',
        component: SoftwareHouseComponent,
      },
      {
        path: 'digital-marketing',
        title: 'ITSP | Digital Marketing',
        component: DigitalMarketingComponent,
      },
      {
        path: 'marketing-business-house',
        title: 'ITSP | Marketing and Business House',
        component: MarketingBusinessComponent,
      },

      //  { path: '**', component: Error404Component },

      // { path: '**', component: Error404Component },
    ],
  },

  { path: '**', redirectTo: '/en', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
