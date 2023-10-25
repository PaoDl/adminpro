import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpeciesService } from '@features/admin/services';

@Component({
  selector: 'species-form',
  templateUrl: './species-form.component.html'
})
export class SpeciesFormComponent {

  public speciesForm!: FormGroup;
  public nameLabel = 'Nombre';
  public scientific_nameLabel = 'Nombre Cientifico';
  public descriptionLabel = 'Descripcion';
  public dietsLabel = 'Dietas';
  public biomeLabel = 'Bioma';
  public updated_atLabel = 'Fecha de Modificacion';

  private speciesService = inject(SpeciesService);
  private fb = inject(FormBuilder);

  public specie = computed(() => this.speciesService.currentSpecie());

   public buildFormEffect = effect(() => {
    if(this.specie()){
      this.speciesForm = this.fb.group({
      name: [this.specie()!.name],
      scientific_name: [this.specie()!.scientific_name],
      description: [this.specie()!.description],
      diets: [this.specie()!.diets],
      biome: [this.specie()!.biome],
      updated_at:[this.specie()!.updated_at],
    })
    } else {
      this.speciesForm = this.fb.group({
      name: [''],
      scientific_name: [''],
      description: [''],
      diets: [''],
      biome: [''],
      updated_at:[''],
    })
    }
  }) 
}
