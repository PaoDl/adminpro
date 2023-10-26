import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DietService } from '@features/admin/services';

@Component({
  selector:'diet-form',
  templateUrl: './diet-form.component.html',
  styles:['']
})
export class DietFormComponent {

  public dietForm!: FormGroup;
  public nameLabel = 'Nombre';
  public descriptionLabel = 'Descripcion';
  

  private dietService = inject(DietService);
  private fb = inject(FormBuilder);

  public diet = computed(() => this.dietService.currentDiet());

  public buildFormEffect = effect(() => {
    if (this.diet()){
      this.dietForm = this.fb.group({
        name: [this.diet()!.name,[Validators.required, Validators.minLength(2)]],
        description: [this.diet()!.description,[Validators.required,Validators.minLength(10)]],
        
      })
    } else {
      this.dietForm = this.fb.group({
        name: ['',[Validators.required, Validators.minLength(2)]],
        description: ['',[Validators.required, Validators.minLength(10)]],
       
      })
    }
  })
  public onSave() {
    if (this.dietForm.valid) {
      
      console.log(this.dietForm.value)
    }
  }
  
  setNull() {
    this.dietService.setDiet(null);
  }
}
