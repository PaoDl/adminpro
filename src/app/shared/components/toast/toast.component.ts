import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faX } from '@fortawesome/free-solid-svg-icons';

import { ToastService } from '@core/services';
import { BtnCircleComponent } from '../btn-circle';
import { ALERT_COLORS } from '@core/models';

@Component({
  selector: 'shared-toast',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, BtnCircleComponent],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  public toastClass = '';
  private toastService = inject(ToastService);

  public toastData = computed(() => this.toastService.toastData());
  public faX = signal<IconDefinition>(faX);

  private mapColors = ALERT_COLORS;

  public isToastVisible = computed<boolean>(() => {
    if (this.toastService.toastData()) {
      this.toastClass = 'animate__animated animate__fadeIn';
      return true;
    }

    return false;
  });

  public toastChangedEffect = effect(() => {
    if (this.toastService.toastData()) {
      setTimeout(() => {
        this.hideToast();
      }, this.toastService.toastData()?.duration);
    }
  });

  hideToast(): void {
    this.toastClass = 'animate__animated animate__fadeOut';
    setTimeout(() => {
      this.toastService.hide();
    }, 1000);
  }

  get styles() {
     const colors = this.mapColors[this.toastService.toastData()!.color];
    if (colors) {
      return colors;
    }
    return {};
  }
}