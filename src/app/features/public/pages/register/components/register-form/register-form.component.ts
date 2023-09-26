import { Component, computed, inject } from '@angular/core';

import { EyeBtnService } from '@core/services';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styles: [],
})
export class RegisterFormComponent {
  private eyeBtnService = inject(EyeBtnService);

  public showPassword = computed<boolean>(this.eyeBtnService.showEye);
}