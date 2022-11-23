import { MaterialModule } from './modules/material/material.module';
import { ProductComponent } from './components/categories/product/product.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { JewleriesComponent } from './components/categories/jewleries/jewleries.component';
import { ElectronicsComponent } from './components/categories/electronics/electronics.component';
import { MenClothingComponent } from './components/categories/men-clothing/men-clothing.component';
import { WomenClothingComponent } from './components/categories/women-clothing/women-clothing.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompleteRegComponent } from './components/auth/complete-reg/complete-reg.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductDetailsComponent } from './components/categories/product-details/product-details.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AccountSettingsComponent } from './components/settings/account-settings/account-settings.component';
import { AppearanceComponent } from './components/settings/appearance/appearance.component';
import { NotificationsComponent } from './components/settings/notifications/notifications.component';
import { SecurityComponent } from './components/settings/History/history.component';
import { AdmincartComponent } from './components/admin/admincart/admincart.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { AdminViewComponent } from './components/admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminElectronicsComponent } from './components/admin/admin-electronics/admin-electronics.component';
import { AdminJeweleriesComponent } from './components/admin/admin-jeweleries/admin-jeweleries.component';
import { AdminMansClothingComponent } from './components/admin/admin-mans-clothing/admin-mans-clothing.component';
import { AdminWomensClothingComponent } from './components/admin/admin-womens-clothing/admin-womens-clothing.component';
import { AdminAddComponent } from './components/admin/admin-add/admin-add.component';
import { AdminSettingsComponent } from './components/admin/admin-settings/admin-settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    JewleriesComponent,
    ElectronicsComponent,
    MenClothingComponent,
    WomenClothingComponent,
    FooterComponent,
    CartComponent,
    ProfileComponent,
    SettingsComponent,
    HomeComponent,
    CompleteRegComponent,
    ContactUsComponent,
    AboutUsComponent,
    SpinnerComponent,
    ProductComponent,
    ProductDetailsComponent,
    AccountSettingsComponent,
    AppearanceComponent,
    SecurityComponent,
    NotificationsComponent,
    AdmincartComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminViewComponent,
    AdminHomeComponent,
    AdminElectronicsComponent,
    AdminJeweleriesComponent,
    AdminMansClothingComponent,
    AdminWomensClothingComponent,
    AdminAddComponent,
    AdminSettingsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    MaterialModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
