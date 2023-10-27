import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@core/services';
import { Biome, Diet } from '@features/admin/models';
import { BiomeService, DietService, SpeciesService } from '@features/admin/services';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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
  
  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);
  private speciesService = inject(SpeciesService);
  private fb = inject(FormBuilder);
  private biomeService = inject(BiomeService);
  private dietService = inject(DietService);

  public biome = signal<Biome[]>([]);
  public diets = signal<Diet[]>([]);
  public specie = computed(() => this.speciesService.currentSpecie());
 
   constructor(){
     this.loadBiome();
     this.loadDiet();
   }
   public buildFormEffect = effect(() => {
    if(this.specie()){
      this.speciesForm = this.fb.group({
      name: [this.specie()!.name,[Validators.required, Validators.min(2)]],
      scientific_name: [this.specie()!.scientific_name,[Validators.required]],
      description: [this.specie()!.description,[Validators.required,Validators.minLength(15)]],
      diet_id: [this.specie()!.diets,[Validators.required]],
      biome: [this.specie()!.biome.biome_id,[Validators.required]],
      
    })
    } else {
      this.speciesForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(2)]],
      scientific_name: ['',[Validators.required]],
      description: ['',[Validators.required,Validators.minLength(15)]],
      diet_id: ['',[Validators.required]],
      biome: ['',[Validators.required]],
      
    })
    }
   })
  public onSave() {
    if (this.specie()) {
      this.speciesService
        .editSpecies(this.speciesForm.value, this.specie()!.species_id)
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
    } else {
      this.speciesService
        .createSpecies(this.speciesForm.value)
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
    this.speciesService.setSpecie(null);
  }
  private loadBiome() {
    this.biomeService.getBiomes()
      .subscribe({
      next: ({reply})=>this.biome.set(reply)
    })
  }

  
  private loadDiet() {
    this.dietService.getDiets()
      .subscribe({
      next: ({reply})=>this.diets.set(reply)
    })
  }
}
