import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './profile/user-profile.component';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';



@NgModule({
  declarations: [UserProfileComponent, ModalProfileComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserProfileModule { }
