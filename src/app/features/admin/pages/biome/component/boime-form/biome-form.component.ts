import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@core/services';
import { BiomeService } from '@features/admin/services';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'biome-form',
  templateUrl: './biome-form.component.html'
})
export class BoimeFormComponent {
  public biomeForm!: FormGroup;
  public nameLabel = 'Nombre';
  public image_urlLabel = 'imagen_url';
  
  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);
  private biomeSevice = inject(BiomeService);
  private fb = inject(FormBuilder);
  

  public biome = computed(() => this.biomeSevice.currentBiome());

  public buildFormEffect = effect(() => {
    if (this.biome()){
      this.biomeForm = this.fb.group({
        name: [this.biome()!.name,[Validators.required,]],
        image_url: [this.biome()!.image_url,[Validators.required,Validators.pattern('^(http(s)?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?$')]],
      
      })
    } else {
      this.biomeForm = this.fb.group({
        name: ['',[Validators.required,]],
        image_url: ['',[Validators.required,Validators.pattern('^(http(s)?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?$')]],
       
      })
    }
  })
  public onSave() {
    if (this.biome()) {
      this.biomeSevice
        .editBiome(this.biomeForm.value, this.biome()!.biome_id)
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
      this.biomeSevice
        .createBiome(this.biomeForm.value)
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
    this.biomeSevice.setBiome(null);
  }

}
