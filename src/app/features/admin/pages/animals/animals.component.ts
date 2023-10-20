import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyResponse } from '@core/models';
import { ToastService } from '@core/services';
import { AnimalForm, Animals } from '@features/admin/models';
import { AnimalsService } from '@features/admin/services';
import { faCheckCircle, faCircleXmark, faEllipsis, faPencil, faSkull, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-animals',
  templateUrl: './animals.component.html',
   styles:[]
})
export class AnimalsComponent implements OnInit {
  public animalsForm!: FormGroup;
  public nameLabel = 'Nombre';
  public ageLabel = 'Edad';
  public genderLabel = 'Genero';
  public arrivalLabel = 'Llegada';
  public health_conditionLabel = 'Salud';
  public exhibit_statusLabel = 'Exhibido';
  public speciesLabel = 'Especie';
  public updated_atLabel = 'Fecha de Modificacion';
 
  
  public animals = signal<Animals[]>([]);
   
  public faEllipsis = signal(faEllipsis);
  public faPencil = signal(faPencil)
  public faTrash = signal(faTrash)
  public faSkull =signal (faSkull)

//injecccion de dependecias cuando es de servicio
  private animalsService = inject(AnimalsService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  
//al momento de iniciar el componente ngoninit
  ngOnInit(): void {
    this.getAnimals();

    
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
  

