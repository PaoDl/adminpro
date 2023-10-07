import { Component, computed, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@features/public';

@Component({
  selector: 'admin-profile-form',
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  public profileForm!: FormGroup;
  public firstNameLabel = 'Nombres';
  public lastNameLabel = 'Apellidos';
  public emailLabel = 'Correo electrónico';

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  public user = computed(() => this.authService.CurrentUser());

  constructor() {
    this.buildForm();
  }

  public onSave() {
    console.log(this.profileForm.value)
  }

  private buildForm() {
    this.profileForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
    })
  }
}