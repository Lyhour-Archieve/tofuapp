import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatListModule, MatSidenavModule, MatSortModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatSortModule,
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatSortModule
  ]
})
export class MaterialModule { }
