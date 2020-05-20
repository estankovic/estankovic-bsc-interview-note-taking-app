import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  constructor(private readonly ref: MatDialogRef<ConfirmComponent>) {}

  ngOnInit(): void {}

  yes() {
    this.ref.close(true);
  }

  no() {
    this.ref.close(false);
  }
}
