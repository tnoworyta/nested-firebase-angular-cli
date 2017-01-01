import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  gridColumnCount: number;

  constructor(af: AngularFire) {
    this.items = af.database.list('items');
    this.gridColumnCount = 4;
  }

  ngOnInit() {
  }
}
