import { Component,  computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnimalsService } from '@features/admin';


@Component({
  selector: 'animals-form',
  templateUrl: './animals-form.component.html',
  styles: ['']
})
export class AnimalsFormComponent {
  
  public animalsForm!: FormGroup;
  public nameLabel = 'Nombre';
  public ageLabel = 'Edad';
  public genderLabel = 'Genero';
  public arrivalLabel = 'Llegada';
  public health_conditionLabel = 'Salud';
  public exhibit_statusLabel = 'Exhibido';
  public speciesLabel = 'Especie';
  public updated_atLabel = 'Fecha de Modificacion';
 
  private animalsService = inject(AnimalsService);
  private fb = inject(FormBuilder);
 
  
  public animal = computed(() => this.animalsService.currentAnimal());
  
  public buildFormEffect = effect(() => {
    if(this.animal()){
      this.animalsForm = this.fb.group({
      name: [this.animal()!.name],
      age: [this.animal()!.age],
      gender: [this.animal()!.gender],
      arrival: [this.animal()!.arrival],
      health_condition: [this.animal()!.health_condition],
      exhibit_status: [this.animal()!.exhibit_status],
      species: [this.animal()!.species],
      updated_at:[this.animal()!.updated_at],
    })
    } else {
      this.animalsForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      arrival: [''],
      health_condition: [''],
      exhibit_status: [''],
      species: [''],
      updated_at:[''],
    })
    }
  }) 

  public onSave() {
    if (this.animalsForm.valid) {
      this.animalsService
        .editAnimal(this.animalsForm.value, this.animal()!.animal_id)
        console.log(this.animal)
  }
}

}
