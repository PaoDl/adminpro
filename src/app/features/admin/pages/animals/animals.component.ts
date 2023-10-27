import { Component,  OnInit, computed, inject, signal } from '@angular/core';

import { ToastService } from '@core/services';
import { Animals } from '@features/admin/models';
import { AnimalsService } from '@features/admin/services';
import { faCircleXmark, faEllipsis, faPencil, faSkull, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'admin-animals',
  templateUrl: './animals.component.html',
   styles:[]
})
export class AnimalsComponent implements OnInit {
  public animals = signal<Animals[]>([]);
   
  public faEllipsis = signal(faEllipsis);
  public faPencil = signal(faPencil)
  public faTrash = signal(faTrash)
  public faSkull =signal (faSkull)

//injecccion de dependecias cuando es de servicio
  private animalsService = inject(AnimalsService);
  private toastService = inject(ToastService);

  public oneAnimal = computed(() => this.animalsService.currentAnimal());
  
//al momento de iniciar el componente ngoninit
  ngOnInit(): void {
    this.getAnimals();
   
  }
  public setAnimal(animal:Animals) {
    this.animalsService.setAnimal(animal);
    
  }
  public deleteAnimal(animal: Animals) {
    this.animalsService.deleteAnimal(animal.animal_id)
      .subscribe({
      next: ({ statusCode, message, reply }) => {
        
          if (statusCode === 200) {
            this.getAnimals();
          this.toastService.show({
          color: 'success',
          message,
          icon: faCircleXmark,
          duration: 4000,
        })
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
    })
      
  }
  

  private getAnimals() {
    this.animalsService.getAnimals().subscribe({
      next: ({ statusCode, message, reply }) => {
        if (statusCode === 200) {
          this.animals.set(reply);
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
  

