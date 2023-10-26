import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BiomeService } from '@features/admin/services';

@Component({
  selector: 'biome-form',
  templateUrl: './biome-form.component.html'
})
export class BoimeFormComponent {
  public biomeForm!: FormGroup;
  public nameLabel = 'Nombre';
  public imagen_urlLabel = 'imagen_url';
  ;

  private biomeSevice = inject(BiomeService);
  private fb = inject(FormBuilder);
  
  public biome = computed(() => this.biomeSevice.currentBiome());

  public buildFormEffect = effect(() => {
    if (this.biome()){
      this.biomeForm = this.fb.group({
        name: [this.biome()!.name,[Validators.required,]],
        imagen_url: [this.biome()!.image_url,[Validators.required,Validators.pattern('^(http(s)?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?$')]],
      
      })
    } else {
      this.biomeForm = this.fb.group({
        name: ['',[Validators.required,]],
        imagen_url: ['',[Validators.required,Validators.pattern('^(http(s)?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?$')]],
       
      })
    }
  })
  public onSave() {
    if (this.biomeForm.valid) {
      
      console.log(this.biomeForm.value)
    }
  }
  
  setNull() {
    this.biomeSevice.setBiome(null);
  }

}
