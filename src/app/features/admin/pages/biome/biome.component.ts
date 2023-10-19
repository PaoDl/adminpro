import { Component, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Biome } from '@features/admin/models';
import { BiomeService } from '@features/admin/services';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-biome',
  templateUrl: './biome.component.html',
  styleUrls: ['./biome.component.css']
})
export class BiomeComponent {
  public biomes = signal<Biome[]>([])


//injecccion de dependecias cuando es de servicio
  private biomeService = inject(BiomeService);
  private toastService = inject(ToastService);
  
//al momento de iniciar el componente ngoninit
  ngOnInit(): void {
    this.getBiomes();
  }

  private getBiomes() {
    this.biomeService.getBiomes().subscribe({
      next: ({statusCode,message,reply}) => {
        if (statusCode === 200) {
          this.biomes.set(reply);
        }else {
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

}
