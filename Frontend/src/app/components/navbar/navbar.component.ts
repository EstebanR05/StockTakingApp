import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { UserService } from 'src/app/shared/services/user.service';
import { user } from 'src/app/shared/interface/user.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public user: user;

  constructor(public location: Location,  private element: ElementRef, private route: Router, private userService: UserService) {
    super();
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.getName();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  public async logout(): Promise<void> {
    this.clearHistory();
    this.route.navigate(['/login']);
    await this.userService.logout();
  }

  public async getName(): Promise<void> {
    try {
      const response = await this.userService.getUser();
      this.user = response;
    } catch (error) { 
      this.handleError(error.element.message);
    }
  }

}
