import { Component,  computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


 
  private animalsService = inject(AnimalsService);
  private fb = inject(FormBuilder);
 
  
  public animal = computed(() => this.animalsService.currentAnimal());
  
  public buildFormEffect = effect(() => {
    if(this.animal()){
      this.animalsForm = this.fb.group({
      name: [this.animal()!.name,[Validators.required,]],
      age: [this.animal()!.age,[Validators.required, Validators.min(0)]],
      gender: [this.animal()!.gender,[Validators.required,]],
      arrival: [this.animal()!.arrival,[Validators.required,]],
      health_condition: [this.animal()!.health_condition,[Validators.required,]],
      exhibit_status: [this.animal()!.exhibit_status,[Validators.required,]],
      
      
    })
    } else {
      this.animalsForm = this.fb.group({
      name: ['',[Validators.required,]],
      age: ['',[Validators.required, Validators.min(0)]],
      gender: ['',[Validators.required,]],
      arrival: ['',[Validators.required,]],
      health_condition: ['',[Validators.required,]],
      exhibit_status: ['',[Validators.required,]],
      
    })
    }
  }) 

  public onSave() {
    if (this.animalsForm.valid) {
      
      console.log(this.animalsForm.value)
    }
  }
  
  setNull() {
    this.animalsService.setAnimal(null);
  }
}


