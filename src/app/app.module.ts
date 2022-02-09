import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { LogoComponent } from './components/logo/logo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticiaDialogComponent } from './components/noticia-dialog/noticia-dialog.component';
import { HomeComponent } from './viws/home/home.component';
import { AdminTableComponent } from './viws/admin-table/admin-table.component';
import {MatTableModule} from '@angular/material/table';
import { TableNoticiasComponent } from './components/table-noticias/table-noticias.component';
import { TableContactoComponent } from './components/table-contacto/table-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoticiaComponent,
    FormContactoComponent,
    LogoComponent,
    NoticiaDialogComponent,
    HomeComponent,
    AdminTableComponent,
    TableNoticiasComponent,
    TableContactoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  entryComponents:[NoticiaDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
