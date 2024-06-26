import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployees } from '../interface/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends BaseComponent {

  constructor(private http: HttpClient) { super() }

  public getAll(): Promise<IEmployees[]> {
    const url: string = `${this.apiUrl}/employees`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<IEmployees[]>(url, { headers }).toPromise();
  }

  public getById(id: number): Promise<IEmployees> {
    const url: string = `${this.apiUrl}/employees/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<IEmployees>(url, { headers }).toPromise();
  }

  public create(body: IEmployees): Promise<any> {
    const url: string = `${this.apiUrl}/employees`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.post<any>(url, body, { headers }).toPromise();
  }

  public update(id: number, body: IEmployees): Promise<any> {
    const url: string = `${this.apiUrl}/employees/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.put<any>(url, body, { headers }).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/employees/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.delete<any>(url, { headers }).toPromise();
  }

}
