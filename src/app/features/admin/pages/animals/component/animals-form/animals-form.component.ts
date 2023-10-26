import { Component,  DestroyRef,  computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@core/services';
import { AnimalsService, Species, SpeciesService } from '@features/admin';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'animals-form',
  templateUrl: './animals-form.component.html',
  styles: ['']
})
export class AnimalsFormComponent {
  
  public animalsForm!: FormGroup;
  public nameLabel = 'Nombre';
  public birthLabel = 'Cumpleaños';
  public ageLabel = 'Edad';
  public genderLabel = 'Genero';
  public health_conditionLabel = 'Salud';
  public exhibit_statusLabel = 'Exhibido';
  public arrivalLabel = 'Llegada';
  public species_idLabel ='Id de Especie'

  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);
  private animalsService = inject(AnimalsService);
  private fb = inject(FormBuilder);
  private speciesService = inject(SpeciesService);
 
  public species = signal<Species[]>([]);
  public animal = computed(() => this.animalsService.currentAnimal());

  constructor() {
    this.loadSpecies();
   }
  
  public buildFormEffect = effect(() => {
    if(this.animal()){
      this.animalsForm = this.fb.group({
      name: [this.animal()!.name,[Validators.required,]],
      birth: [this.animal()!.birth,[Validators.required,]],
      age: [this.animal()!.age, [Validators.required, Validators.min(0)]],
      gender: [this.animal()!.gender,[Validators.required,]],
      arrival: [this.animal()!.arrival, [Validators.required,]],
      species_id:[this.animal()!.species.species_id, [Validators.required,]],
      health_condition: [this.animal()!.health_condition,[Validators.required,]],
      exhibit_status: [this.animal()!.exhibit_status, [Validators.required,]],
      
      
      
    })
    } else {
      this.animalsForm = this.fb.group({
        name: ['', [Validators.required,]],
        birth: ['',[Validators.required,]],
        gender: ['',[Validators.required,]],
        age: ['',[Validators.required, Validators.min(0)]],
        health_condition: ['', [Validators.required,]],
        species_id:['', [Validators.required,]],
        arrival: ['',[Validators.required,]],
        exhibit_status: ['',[Validators.required,]],
    })
    }
  }) 

  public onSave() {
    if (this.animal()) {
      this.animalsService
        .editAnimal(this.animalsForm.value, this.animal()!.animal_id)
        .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
          next: ({ reply, message }) =>
            this.toastService.show({
              color: 'success',
              message,
              icon: faCheckCircle,
              duration: 4000,
            }),
          error: (message) => {
            console.log(message);
            this.toastService.show({
              color: 'error',
              message,
              icon: faCircleXmark,
              duration: 4000,
            });
          },
        });
    } else {
      this.animalsService
        .createAnimal(this.animalsForm.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
          next: ({ reply, message }) =>
            this.toastService.show({
              color: 'success',
              message,
              icon: faCheckCircle,
              duration: 4000,
            }),
          error: (message) => {
            console.log(message);
            this.toastService.show({
              color: 'error',
              message,
              icon: faCircleXmark,
              duration: 4000,
            });
          },
        });
      
    }
  }
  
  setNull() {
    this.animalsService.setAnimal(null);
  }

  private loadSpecies() {
    this.speciesService.getSpecies()
      .subscribe({
      next: ({reply})=>this.species.set(reply)
    })
  }
}


