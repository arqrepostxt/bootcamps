import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './../model/item.model';
import { Drink } from './../model/drink.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  baseUrl = 'http://localhost:8080/api/v1/inventory'
  items: Item[] = [];
  remoteItems: Item[] =[];
  drinks: Drink[] = [];
  totalCoffee: number = 0;
  totalJuice: number = 0;
  totalWater: number = 0;
  remoteJuiceTotal: number = 0;
  remoteWaterTotal: number = 0;
  remoteCoffee: number = 0;
  drinkJuiceTotal: number = 0;
  drinkWaterTotal: number = 0;
  drinkCoffeeTotal: number = 0;
  isItemDialogOpen: boolean = false;

  constructor(private http: HttpClient) { }

  getItems() {
    return this.items;
  }

  getRemoteItems() {
    return this.remoteItems;
  }

  getDrinks() {
    return this.drinks;
  }

  getTotalCoffee(){
    return this.totalCoffee;
  }

  getTotalJuice(){
    return this.totalJuice;
  }

  getTotalWater(){
    return this.totalWater;
  }

  getIsItemDialogOpen(){
    return this.isItemDialogOpen;
  }

  disableDialog() {
    this.isItemDialogOpen = false;
  }

  registerItem(name: string, type: string, quantity: number) {
    const newItem: Item = { name, type, quantity };
    this.items.push(newItem);
    this.updateInventory();
  }

  updateItemByIndex(index: number, updatedName: string, updatedType: string, updatedQuantity: number) {
    const updatedItem: Item = {
      name: updatedName,
      type: updatedType,
      quantity: updatedQuantity,
    };
    if (index >= 0 && index < this.items.length) {
      this.items[index] = updatedItem;
      this.updateInventory();
    }
  }

  updateDrinkInformation(id: number, name: string, type: string, quantity: number): Observable<any> {
      const beverage = { name, type, quantity };
      return this.http.put(`${this.baseUrl}/${id}`, beverage);
  }

  deleteItemByIndex(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.updateInventory();
    }
  }

  // Delete Drink By Id
  deleteDrinkById(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateInventory() {
    this.totalCoffee = this.calculateInventory('Coffee');
    this.totalJuice = this.calculateInventory('Juice');
    this.totalWater = this.calculateInventory('Water');
  }

  calculateInventory(type: string): number {
    return this.items
      .filter(item => item.type === type)
      .reduce((total, item) => total + item.quantity, 0);
  }

  // Add new Item to Remote
  sendFormData(name: string, type: string, quantity: number): Observable<any> {
    const beverage = { name, type, quantity };
    return this.http.post(`${this.baseUrl}`, beverage);
  }

  // Add a new Drink (Remote)
  addDrink(name: string, type: string, quantity: number): Observable<any> {
    const beverage = { name, type, quantity };
    return this.http.post(`${this.baseUrl}`, beverage);
  }

  // Retrieve items from Remote
  fetchRemoteItemsFromServer(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/beverages`);
  }

  // Retrieve Drinks (Remote)
  fetchDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.baseUrl}/beverages`);
  }

  // Refresh list Retrieved from Remote
  updateItemsFromServer() {
    this.fetchRemoteItemsFromServer().subscribe((data: Item[]) => {
      data.forEach((element) => {
        this.remoteItems.push(element);
      });
      this.updateProductsTotals();
    });
  }

  // Refresh drinks list (Remote)
  updateDrinksListCopy() {
    this.fetchDrinks().subscribe((data: Drink[]) => {
    this.drinks.length = 0; // Clear drinks array to fix duplicate list
      data.forEach((drink) => {
        this.drinks.push(drink);
      });
      this.updateDrinksTotals();
    });
  }

  calculateRemoteTotals(type: string): number {
    return this.remoteItems
      .filter(element => element.type === type)
      .reduce((total, element) => total + element.quantity, 0);
  }

  calculateDrinksTotals(type: string): number {
    return this.drinks
      .filter(drink => drink.type === type)
      .reduce((total, drink) => total + drink.quantity, 0);
  }

  updateProductsTotals() {
    this.remoteCoffee = this.calculateRemoteTotals('Coffee');
    this.remoteJuiceTotal = this.calculateRemoteTotals('Juice');
    this.remoteWaterTotal = this.calculateRemoteTotals('Water');
  }

  updateDrinksTotals() {
    this.drinkCoffeeTotal = this.calculateDrinksTotals('Coffee');
    this.drinkJuiceTotal = this.calculateDrinksTotals('Juice');
    this.drinkWaterTotal = this.calculateDrinksTotals('Water');
  }

}