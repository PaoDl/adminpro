import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BiomeService } from '@features/admin/services';

@Component({
  selector: 'biome-form',
  templateUrl: './boime-form.component.html'
})
export class BoimeFormComponent {
  public biomeForm!: FormGroup;
  public nameLabel = 'Nombre';
  public imagen_urlLabel = 'imagen_url';
  public updated_atLabel = 'Fecha de Modificacion';

  private biomeSevice = inject(BiomeService);
  private fb = inject(FormBuilder);
  
  public biome = computed(() => this.biomeSevice.currentBiome());

  public buildFormEffect = effect(() => {
    if (this.biome()){
      this.biomeForm = this.fb.group({
        name: [this.biome()!.name],
        imagen_url: [this.biome()!.image_url],
        updated_at: [this.biome()!.updated_at],
      })
    } else {
      this.biomeForm = this.fb.group({
        name: [''],
        imagen_url: [''],
        updated_at: [''],
      })
    }
  })

}
