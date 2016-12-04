import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'customer-new-form',
  templateUrl: './customer-new-form.component.html',
  styleUrls: ['./customer-new-form.component.css']
})
export class CustomerNewFormComponent implements OnInit {
  public myForm: FormGroup;

  customers: FirebaseListObservable<any>;

  constructor(private _fb: FormBuilder, public af: AngularFire) {
    this.customers = af.database.list('/customers');
  }

  ngOnInit() {
    this.myForm = this.initCustomerFormGroup();
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

  addAddress($event) {
    $event.preventDefault();
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number, $event) {
    $event.preventDefault();
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }


  save(customerFormGroup: FormGroup) {
    this.customers.push(customerFormGroup.value);
    this.myForm = this.initCustomerFormGroup();
  }
}
