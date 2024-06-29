import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReplacement } from '../interface/replacement.interface';
import { BaseComponent } from '../core/base.component';

@Injectable({
  providedIn: 'root'
})
export class ReplacementService extends BaseComponent {

  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Promise<IReplacement[]> {
    const url: string = `${this.apiUrl}/spareparts`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<IReplacement[]>(url, { headers }).toPromise();
  }

  public getById(id: number): Promise<IReplacement> {
      const url: string = `${this.apiUrl}/spareparts/${id}`;
      let headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ` + this.token
      );
      return this.http.get<IReplacement>(url, { headers }).toPromise();
  }

  public create(body: IReplacement): Promise<any> {
      const url: string = `${this.apiUrl}/spareparts`;
      let headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ` + this.token
      );
      return this.http.post<any>(url, body, { headers }).toPromise();
   }

   public update(id: number, body: IReplacement): Promise<any> { 
      const url: string = `${this.apiUrl}/spareparts/${id}`;
      let headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ` + this.token
      );
      return this.http.put<any>(url, body, { headers }).toPromise();
    }

    public delete(id: number): Promise<any> { 
      const url: string = `${this.apiUrl}/spareparts/${id}`;
      let headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ` + this.token
      );
      return this.http.delete<any>(url, { headers }).toPromise();
     }
}
