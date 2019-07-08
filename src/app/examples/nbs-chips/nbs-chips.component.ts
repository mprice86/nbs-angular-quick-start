import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface UniclassCode {
  code: string;
}

@Component({
  selector: 'nbs-chips',
  templateUrl: './nbs-chips.component.html',
  styleUrls: ['./nbs-chips.component.scss']
})
export class NbsChipsComponent {
  private codes: UniclassCode[] = [
    {code: 'Pr_40_30_84_69'},
    {code: 'Pr_40_30_04_50'},
    {code: 'Pr_40_30_22_46'}
  ];
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.codes.push({code: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(code: UniclassCode): void {
    const index = this.codes.indexOf(code);

    if (index >= 0) {
      this.codes.splice(index, 1);
    }
  }

}