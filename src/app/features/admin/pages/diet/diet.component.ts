import { Component, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Diet } from '@features/admin/models';
import { DietService } from '@features/admin/services';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-diet',
  templateUrl: './diet.component.html',
  styles:[]
})
export class DietComponent {
public diets = signal<Diet[]>([])

//injecccion de dependecias cuando es de servicio
  private dietService = inject(DietService);
  private toastService = inject(ToastService);
  
//al momento de iniciar el componente ngoninit
  ngOnInit(): void {
    this.getDiets();
  }

  private getDiets() {
    this.dietService.getDiets().subscribe({
      next: ({ statusCode, message, reply }) => {
        if (statusCode === 200) {
          this.diets.set(reply);
        } else {
          this.toastService.show({
            color: 'error',
            message,
            icon: faCircleXmark,
            duration: 4000,
          })
        }
      },
      error: (error) => {
        this.toastService.show({
          color: 'error',
          message: error,
          icon: faCircleXmark,
          duration: 4000,
        })
      }
    });
  }
}
