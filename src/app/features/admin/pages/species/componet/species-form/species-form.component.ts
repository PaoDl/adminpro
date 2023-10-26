import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  

  private speciesService = inject(SpeciesService);
  private fb = inject(FormBuilder);

  public specie = computed(() => this.speciesService.currentSpecie());

   public buildFormEffect = effect(() => {
    if(this.specie()){
      this.speciesForm = this.fb.group({
      name: [this.specie()!.name,[Validators.required, Validators.min(2)]],
      scientific_name: [this.specie()!.scientific_name,[Validators.required]],
      description: [this.specie()!.description,[Validators.required,Validators.minLength(15)]],
      diets: [this.specie()!.diets,[Validators.required]],
      biome: [this.specie()!.biome,[Validators.required]],
      
    })
    } else {
      this.speciesForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(2)]],
      scientific_name: ['',[Validators.required]],
      description: ['',[Validators.required,Validators.minLength(15)]],
      diets: ['',[Validators.required]],
      biome: ['',[Validators.required]],
      
    })
    }
   })
  public onSave() {
    if (this.speciesForm.valid) {
      
      console.log(this.speciesForm.value)
    }
  }
  
  setNull() {
    this.speciesService.setSpecie(null);
  }
}
