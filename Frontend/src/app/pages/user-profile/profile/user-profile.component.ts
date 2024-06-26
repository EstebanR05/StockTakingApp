import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { user } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent extends BaseComponent implements OnInit {
  public data = {} as user;
  constructor( private userService: UserService) { super() }

  ngOnInit() {
    this.onReload();
  }

  async getInfoUser(): Promise<void> {
    try {
      const response = await this.userService.getUser();
      this.data = response;
    } catch (error) {
      this.handleError(error.element.message);
    }
  }

  public onReload(): void {
    this.getInfoUser();
  }

}
