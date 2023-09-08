import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WarehouseService } from '../../../services/warehouse.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent implements OnInit  {
  selectedOption: string = '';
  addProductForm: FormGroup = this.formBuilder.group({
    name: ["", Validators.required],
    type: ["", Validators.required],
    quantity: [1, Validators.required],
  });

  constructor(
    public dialogAddItem: MatDialogRef<AddItemDialogComponent>,
    private formBuilder: FormBuilder,
    private warehouseService: WarehouseService,
  ) {}

  selectOption(option: string) {
    this.selectedOption = option;
    this.addProductForm.patchValue({ type: option });
  }

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      quantity: [1, Validators.required],
    });
  }

   incrementQuantity() {
    const currentValue = this.addProductForm.get('quantity')?.value;
    this.addProductForm.get('quantity')?.setValue(currentValue + 1);
  }

  decrementQuantity() {
    const currentValue = this.addProductForm.get('quantity')?.value;
    if (currentValue > 1) {
      this.addProductForm.get('quantity')?.setValue(currentValue - 1);
    }
  }

  registerDrink(name: string, type: string, quantity: number) {
    this.warehouseService.addDrink(name, type, quantity).subscribe(
      response => {
        console.log('Drink registered sucessfully', response);
        this.warehouseService.updateDrinksListCopy();
      }, error => {
        console.log('Error while registering Drink', error);
      }
    );
  }

  onSubmit(){
    if (this.addProductForm.valid){
      const {name, type, quantity} = this.addProductForm.value;
      this.registerDrink(name, type, quantity);
    }
    this.closeDialog();
  }

  closeDialog() {
    this.dialogAddItem.close();
    this.warehouseService.disableDialog();
  }
}
