import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminSettingsComponent } from './components/admin/admin-settings/admin-settings.component';
import { AdminGuard } from './Guard/admin.guard';
import { AdminWomensClothingComponent } from './components/admin/admin-womens-clothing/admin-womens-clothing.component';
import { AdminMansClothingComponent } from './components/admin/admin-mans-clothing/admin-mans-clothing.component';
import { AdminJeweleriesComponent } from './components/admin/admin-jeweleries/admin-jeweleries.component';
import { AdminElectronicsComponent } from './components/admin/admin-electronics/admin-electronics.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminViewComponent } from './components/admin/admin-view/admin-view.component';
import { AdmincartComponent } from './components/admin/admincart/admincart.component';
import { LoginGuard } from './Guard/login.guard';
import { NotificationsComponent } from './components/settings/notifications/notifications.component';
import { SecurityComponent } from './components/settings/History/history.component';
import { AppearanceComponent } from './components/settings/appearance/appearance.component';
import { AccountSettingsComponent } from './components/settings/account-settings/account-settings.component';
import { ProductDetailsComponent } from './components/categories/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WomenClothingComponent } from './components/categories/women-clothing/women-clothing.component';
import { MenClothingComponent } from './components/categories/men-clothing/men-clothing.component';
import { JewleriesComponent } from './components/categories/jewleries/jewleries.component';
import { ElectronicsComponent } from './components/categories/electronics/electronics.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompleteRegComponent } from './components/auth/complete-reg/complete-reg.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'complete-reg', component: CompleteRegComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        canActivateChild: [LoginGuard],
      },
      {
        path: 'appearance',
        component: AppearanceComponent,
        canActivateChild: [LoginGuard],
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        canActivateChild: [LoginGuard],
      },
      {
        path: 'security',
        component: SecurityComponent,
        canActivateChild: [LoginGuard],
      },
    ],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [LoginGuard],
  },
  { path: 'about-us', component: AboutUsComponent, canActivate: [LoginGuard] },
  {
    path: 'electronics',
    component: ElectronicsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'jewelries',
    component: JewleriesComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'men-clothing',
    component: MenClothingComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'women-clothing',
    component: WomenClothingComponent,
    canActivate: [LoginGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [LoginGuard] },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-cart',
    component: AdmincartComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-view',
    component: AdminViewComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-electronics',
    component: AdminElectronicsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-jewelries',
    component: AdminJeweleriesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-men-clothing',
    component: AdminMansClothingComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-women-clothing',
    component: AdminWomensClothingComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-settings',
    component: AdminSettingsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
