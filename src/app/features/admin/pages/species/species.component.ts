import { Component, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Species } from '@features/admin/models';
import { SpeciesService } from '@features/admin/services';
import { faCircleXmark, faCommentDots, faEllipsis, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-species',
  templateUrl: './species.component.html',
  styles:[]
})
export class SpeciesComponent{
public species = signal<Species[]>([])


//injecccion de dependecias cuando es de servicio
  private speciesService = inject(SpeciesService);
  private toastService = inject(ToastService);
  
  public faEllipsis = signal(faEllipsis);
  public faPencil = signal(faPencil);
  public faTrash = signal(faTrash);
//al momento de iniciar el componente ngoninit
  ngOnInit(): void {
    this.getSpecies();
  }

  public setSpecie(specie: Species) {
    this.speciesService.setSpecie(specie);
  }

  private getSpecies() {
    this.speciesService.getSpecies().subscribe({
      next: ({ statusCode, message, reply }) => {
        if (statusCode === 200) {
          this.species.set(reply);
        } else {
          this.toastService.show({
            color: 'error',
            message,
            icon: faCircleXmark,
            duration: 4000,
          })
        }
      },
      error: (error) => {
        this.toastService.show({
          color: 'error',
          message: error,
          icon: faCircleXmark,
          duration: 4000,
        })
      }
    });
  }
  public deleteSpecies(specie: Species) {
    this.speciesService.deleteSpecies(specie.species_id)
      .subscribe({
      next: ({ statusCode, message, reply }) => {
        
          if (statusCode === 200) {
            this.getSpecies();
          this.toastService.show({
          color: 'success',
          message,
          icon: faCircleXmark,
          duration: 4000,
        })
        } else {
          this.toastService.show({
            color: 'error',
            message,
            icon: faCircleXmark,
            duration: 4000,
          })
        }
      },
      error: (error) => {
        this.toastService.show({
          color: 'error',
          message: error,
          icon: faCircleXmark,
          duration: 4000,
        })
      }
    })
      
  }
}
