import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() item: any;
  public myForm: FormGroup;

  customers: FirebaseListObservable<any>;

  constructor(private _fb: FormBuilder, public af: AngularFire) {
    this.customers = af.database.list('/customers');
  }

  ngOnInit() {
    this.myForm = this.initCustomerFormGroup();
  }

  editCustomer() {
    console.log(this.item.$key)
  }

  initCustomerFormGroup() {
    return this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([
        this.initAddress(),
      ])
    });
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }


  save(customerFormGroup: FormGroup) {
    this.customers.push(customerFormGroup.value);
    this.myForm = this.initCustomerFormGroup();
  }

}
