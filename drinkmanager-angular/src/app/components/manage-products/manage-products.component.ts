import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})

  export class ManageProductsComponent implements OnInit {
    drinks = this.warehouseService.getDrinks();
    isEditMode = false;
    selectedItem = -1;
    isItemDialogOpen: boolean = this.warehouseService.getIsItemDialogOpen();
  
    editItemForm: FormGroup = this.formBuilder.group({
      editedName: ["", Validators.required],
      editedType: ["", Validators.required],
      editedQuantity: [1, Validators.required],
    });
  
    constructor(
      public dialog: MatDialog,
      private formBuilder: FormBuilder,
      public warehouseService: WarehouseService
      ) {}
  
    ngOnInit(): void {
      this.drinks = this.warehouseService.drinks;
      this.editItemForm = this.formBuilder.group({
        editedName: ["", Validators.required],
        editedType: ["", Validators.required],
        editedQuantity: [1, Validators.required],
      });
    }



    onEditMode(index: number) {
      if (!this.isEditMode){
        this.isEditMode = true;
        this.selectedItem = index;
        this.onEnterEditMode(index);
      } else {
      this.selectedItem = -1; // Selectt invalid drink
      }
    }

    onEnterEditMode(index: number) {
      const drink = this.drinks[index];
      this.editItemForm.get('editedName')?.setValue(drink.name);
      this.editItemForm.get('editedQuantity')?.setValue(drink.quantity);
      this.editItemForm.get('editedType')?.setValue(drink.type);
      this.isEditMode = true;
    }

    // Send edited drink id with information and receive response
    onSubmitUpdatedDrink(id: number) {
      const {editedName, editedType, editedQuantity} = this.editItemForm.value;
      this.selectedItem = -1; // Select invalid drink
      this.warehouseService.updateDrinkInformation(id, editedName, editedType, editedQuantity).subscribe(
        response => {
          console.log('Drink updated!', response)
          this.warehouseService.updateDrinksListCopy();
        }, error => {
          console.log('Failed to update Drink!', error)
        }
      );
      this.isEditMode = false;
  }

    // Delete drink by id
    onDeleteDrink(id: number) {
      this.warehouseService.deleteDrinkById(id).subscribe(
        response => {
          console.log('Drink deleted!', response)
          this.warehouseService.updateDrinksListCopy();
        }, error => {
          console.log('Failed to delete Drink!', error)
        }
      );
    }
  
    incrementItemQuantity() {
      const currentValue = this.editItemForm.get('editedQuantity')?.value;
      this.editItemForm.get('editedQuantity')?.setValue(currentValue + 1);
    }
  
    decrementItemQuantity() {
      const currentValue = this.editItemForm.get('editedQuantity')?.value;
      if (currentValue > 1) {
        this.editItemForm.get('editedQuantity')?.setValue(currentValue - 1);
      }
    }
  
    openDialog(): void {
      if (this.warehouseService.getIsItemDialogOpen() == false) {
        this.isItemDialogOpen = true;
        const dialogAddItem = this.dialog.open(AddItemDialogComponent, {
          width: '400px',
        });
      }
    }
  }