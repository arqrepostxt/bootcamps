import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WarehouseService } from './warehouse.service';
import { Item } from './model/item.model';

describe('WarehouseService', () => {
  let service: WarehouseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WarehouseService]
    });
    service = TestBed.inject(WarehouseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register an item', () => {
    const itemName = 'Best coffee';
    const itemType = 'Coffee';
    const itemQuantity = 5;

    service.registerItem(itemName, itemType, itemQuantity);
    const items: Item[] = service.getItems();

    expect(items.length).toBe(1);
    expect(items[0].name).toBe(itemName);
    expect(items[0].type).toBe(itemType);
    expect(items[0].quantity).toBe(itemQuantity);
  });

  it('should calculate total coffee correctly', () => {
    service.registerItem('Coffee', 'Coffee', 3);
    service.registerItem('Light H2O', 'Water', 2);
    service.registerItem('Coffee', 'Coffee', 1);

    const totalCoffee = service.getTotalCoffee();

    expect(totalCoffee).toBe(4);
  });

  // Add more test cases for other methods as needed

  it('should send form data correctly', () => {
    const mockResponse = { success: true };
    const formData = { name: 'Juice', type: 'Beverage', quantity: 3 };

    service.sendFormData(formData.name, formData.type, formData.quantity).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.baseUrl}`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
