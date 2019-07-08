import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { NbsExampleDialogComponent, ExampleDialogData } from './nbs-example-dialog/nbs-example-dialog.component';

@Component({
  selector: 'nbs-modals',
  templateUrl: './nbs-modals.component.html',
  styleUrls: ['./nbs-modals.component.scss']
})
export class NbsModalsComponent {
  private exampleDialogData: ExampleDialogData;
  
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NbsExampleDialogComponent, {
      width: '100%',
      maxWidth: '500px',
      data: {
        userName: 'John Delorean',
        userFruit: 'Pineapple',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exampleDialogData = result;
        this.snackBar.open(this.exampleDialogData.userName + ' chose ' + this.exampleDialogData.userFruit, 'OK');      
      }
    });
  }
}
