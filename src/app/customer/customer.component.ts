import { Component, Input, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: any;
  customers: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.customers = af.database.list('customers');
  }

  ngOnInit() {
  }
}
