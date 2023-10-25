import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public updated_atLabel = 'Fecha de Modificacion';

  private dietService = inject(DietService);
  private fb = inject(FormBuilder);

  public diet = computed(() => this.dietService.currentDiet());

  public buildFormEffect = effect(() => {
    if (this.diet()){
      this.dietForm = this.fb.group({
        name: [this.diet()!.name],
        description: [this.diet()!.description],
        updated_at: [this.diet()!.updated_at],
      })
    } else {
      this.dietForm = this.fb.group({
        name: [''],
        description: [''],
        updated_at: [''],
      })
    }
  })
}
