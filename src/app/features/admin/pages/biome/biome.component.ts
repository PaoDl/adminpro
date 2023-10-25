import { Component, OnInit, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Biome } from '@features/admin/models';
import { BiomeService } from '@features/admin/services';
import { faCircleXmark, faCommentDots, faEllipsis, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-biome',
  templateUrl: './biome.component.html',
  styleUrls: ['./biome.component.css']
})
export class BiomeComponent implements OnInit {
  public biomes = signal<Biome[]>([])


//injecccion de dependecias cuando es de servicio
  private biomeService = inject(BiomeService);
  private toastService = inject(ToastService);

  public faEllipsis = signal(faEllipsis);
  public faPencil = signal(faPencil);
  public faTrash = signal(faTrash);
 
  
//al momento de iniciar el componente ngoninit
  ngOnInit(): void {
    this.getBiomes();
  }

  public setBiome(biome: Biome) {
    this.biomeService.setBiome(biome);
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
