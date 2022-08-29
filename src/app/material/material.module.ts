import { NgModule } from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
 exports: [
   MatAutocompleteModule,
   MatButtonModule,
   MatCardModule,
   MatDialogModule,
   MatIconModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatListModule,
   MatSidenavModule,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatSnackBarModule,
   MatToolbarModule
 ]
})
export class MaterialModule { }
