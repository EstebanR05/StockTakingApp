import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { user } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { super(); }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }
  ngOnDestroy() {
  }

  async submit(): Promise<any> {
    if (this.form.invalid) return this.handleError("Please enter email or password");

    try {
      this.clearHistory();
      const result: user = await this.userService.login(this.form.value);
      localStorage.setItem("token", result.token);
      return this.route.navigate(['/dashboard']).then(() => { window.location.reload(); });
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

}
