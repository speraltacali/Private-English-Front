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
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

// Modulos Otros

import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';



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
        MatRadioModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        FlexLayoutModule,
        CommonModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        FormsModule        
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
        MatRadioModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        FlexLayoutModule,
        CommonModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        FormsModule
    ]
})


export class MaterialModule{
    
}
