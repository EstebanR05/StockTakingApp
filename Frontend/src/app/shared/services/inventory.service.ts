import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IInventory } from '../interface/inventory.inferface';

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends BaseComponent {

  constructor( private http: HttpClient) { super() }

  public getAll(): Promise<IInventory[]> {
    const url: string = `${this.apiUrl}/inventories`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<IInventory[]>(url, {headers}).toPromise();
  }

  public getById(id: number): Promise<IInventory> { 
    const url: string = `${this.apiUrl}/inventories/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<IInventory>(url, { headers }).toPromise();
   }

   public create(body: IInventory): Promise<any> { 
    const url: string = `${this.apiUrl}/inventories`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.post<any>(url, body, { headers }).toPromise();
    }

    public update(id: number, body: IInventory): Promise<any> { 
      const url: string = `${this.apiUrl}/inventories/${id}`;
      let headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ` + this.token
      );
      return this.http.put<any>(url, body, { headers }).toPromise();
     }

     public delete(id: number): Promise<any> { 
      const url: string = `${this.apiUrl}/inventories/${id}`;
      let headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ` + this.token
      );
      return this.http.delete<any>(url, { headers }).toPromise();
      }
}
