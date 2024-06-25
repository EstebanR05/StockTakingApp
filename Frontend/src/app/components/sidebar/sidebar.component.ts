import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { UserService } from 'src/app/shared/services/user.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/tables', title: 'Inventario', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/dashboard', title: 'Repuestos', icon: 'ni-settings text-orange', class: '' },
  { path: '/dashboard', title: 'Empleados', icon: 'ni-briefcase-24 text-info', class: '' },
  { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
  { path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' },
  // { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  // { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends BaseComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private route: Router, private userService: UserService) { super(); }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.route.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  public async logout(): Promise<void> {
    this.clearHistory();
    this.route.navigate(['/login']);
    await this.userService.logout();
  }
}
