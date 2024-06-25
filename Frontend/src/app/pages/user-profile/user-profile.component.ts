import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent extends BaseComponent implements OnInit {
  public data: any = []
  constructor( private userService: UserService) { super() }

  ngOnInit() {
    this.getInfoUser();
  }

  async getInfoUser(): Promise<void> {
    const response = await this.userService.getUser();
    this.data = response;
  }

}
