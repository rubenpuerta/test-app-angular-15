import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import { NgModule } from '@angular/core';

const MaterialModules = [
  MatToolbarModule,
  MatIconModule, 
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
]

@NgModule({
  imports: [ MaterialModules ],
  exports: [ MaterialModules ],

})
export class MaterialModule {}