import { Component, DestroyRef, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@core/services';
import { DietService } from '@features/admin/services';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector:'diet-form',
  templateUrl: './diet-form.component.html',
  styles:['']
})
export class DietFormComponent {

  public dietForm!: FormGroup;
  public nameLabel = 'Nombre';
  public descriptionLabel = 'Descripcion';
  
  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);
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
    if (this.diet()) {
      this.dietService
        .editDiet(this.dietForm.value, this.diet()!.diet_id)
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
          }       
        });
      
    } else {
      this.dietService
        .createDiet(this.dietForm.value)
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
    this.dietService.setDiet(null);
  }
}
