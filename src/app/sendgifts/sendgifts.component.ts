import { Component, OnInit } from '@angular/core';
import { SendgiftsList } from '../sendgifts-list'; 

@Component({
  selector: 'app-sendgifts',
  templateUrl: './sendgifts.component.html',
  styleUrls: ['./sendgifts.component.scss']
})
export class SendgiftsComponent implements OnInit {

  sendgiftslist = SendgiftsList;

  constructor() { }

  ngOnInit(): void {
  }

}
