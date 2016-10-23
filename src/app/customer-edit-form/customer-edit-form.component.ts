import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'customer-edit-form',
  templateUrl: './customer-edit-form.component.html',
  styleUrls: ['./customer-edit-form.component.css']
})
export class CustomerEditFormComponent implements OnInit, OnChanges {
  @Input() customer: any;
  customers: FirebaseListObservable<any>;
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder, public af: AngularFire) {
    this.customers = af.database.list('customers');
  }

  ngOnInit() {
    this.myForm = this.initCustomerFormGroup();
  }

  ngOnChanges(changes) {
    if(changes.customer.previousValue == null && changes.customer.currentValue != null){
      this.myForm = this.initCustomerFormGroup();
    }
  }

  initCustomerFormGroup() {
    return this._fb.group({
      name: [this.customer ? this.customer.name : '', [Validators.required, Validators.minLength(5)]],
      addresses: this.initAddresses()
    });
  }

  initAddresses() {
    if(this.customer == null){
      return this._fb.array([
        this.initAddress(null),
      ])
    } else {
      return this._fb.array(
        this.customer.addresses.map((address) => {
          return this.initAddress(address);
        })
      );
    }
  }

  initAddress(address: any) {
    if(address == null) {
      return this._fb.group({
        street: ['', Validators.required],
        postcode: ['']
      });
    } else {
      return this._fb.group({
        street: [address.street, Validators.required],
        postcode: [address.postcode]
      });
    }
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress(null));
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }


  save(customerFormGroup: FormGroup) {
    this.customers.update(this.customer.$key, customerFormGroup.value);
  }
}
