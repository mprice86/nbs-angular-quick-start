import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ExampleDialogData {
  userName: string;
  userFruit: string;
}

@Component({
  selector: 'nbs-example-dialog',
  templateUrl: './nbs-example-dialog.component.html',
  styleUrls: ['./nbs-example-dialog.component.scss']
})
export class NbsExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NbsExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExampleDialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
