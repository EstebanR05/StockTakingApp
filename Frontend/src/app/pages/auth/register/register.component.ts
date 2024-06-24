import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { super(); }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async createAccount() {
    if (this.form.valid) {
      try {
        this.clearHistory();
        await this.userService.register(this.form.value);
        this.handleSuccess('User created! please now sign in');
        this.route.navigate(['/authentication/login']);
      } catch (error: any) {
        this.handleError(error.error.message);
      }
    }
  }
}