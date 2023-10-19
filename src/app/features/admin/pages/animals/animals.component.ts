import { Component, OnInit, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Animals } from '@features/admin/models';
import { AnimalsService } from '@features/admin/services';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-animals',
  templateUrl: './animals.component.html',
   styles:[]
})
export class AnimalsComponent implements OnInit {
  public animals = signal<Animals[]>([])


//injecccion de dependecias cuando es de servicio
  private animalsService = inject(AnimalsService);
  private toastService = inject(ToastService);
  
//al momento de iniciar el componente ngoninit
  ngOnInit(): void {
    this.getAnimals();
  }

  private getAnimals() {
    this.animalsService.getAnimals().subscribe({
      next: ({statusCode,message,reply}) => {
        if (statusCode === 200) {
          this.animals.set(reply);
        }else {
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
