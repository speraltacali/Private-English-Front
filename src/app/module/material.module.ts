import { NgModule } from '@angular/core';

import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    imports: [
        MatSidenavModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSnackBarModule,
        MatStepperModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule        
    ],
    exports : [
        MatSidenavModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSnackBarModule,
        MatStepperModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule
    ]
})


export class MaterialModule{
    
}
