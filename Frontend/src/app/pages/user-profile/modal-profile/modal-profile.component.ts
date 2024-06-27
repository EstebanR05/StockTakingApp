import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { user } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.scss']
})
export class ModalProfileComponent extends BaseComponent implements OnInit {

  @Input() modal: any;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() reload: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService, private fb: FormBuilder) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      age: ['', Validators.required],
      staff: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      aboutMe: ['', Validators.required]
    });

    this.getValuesForm();
  }

  private async getValuesForm(): Promise<void> {
    const response: user = await this.userService.getUser();
    this.form.patchValue(response);
   }

  public async submit(): Promise<void> { 
    if (this.form.valid) {
      try {
        await this.userService.updateUser(this.form.value);
        this.handleSuccess('Profile updated successfully');
        this.closeModal.emit();
        this.reload.emit()
      } catch (error) {
        this.handleError(error.element.message);
      }
     }
   }



}
