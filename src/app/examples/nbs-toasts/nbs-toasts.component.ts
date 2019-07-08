import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'nbs-toasts',
  templateUrl: './nbs-toasts.component.html',
  styleUrls: ['./nbs-toasts.component.scss'],
})
export class NbsToastsComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.snackBar.open('Example of toast opened by app event', '');
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: action ? 0 : 5000,
    });
  }
}
