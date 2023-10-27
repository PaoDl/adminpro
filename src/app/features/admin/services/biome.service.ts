import { Injectable, computed, inject, signal } from '@angular/core';
import { MyResponse } from '@core/models';
import { ApiService } from '@core/services';
import { Observable, catchError, throwError } from 'rxjs';
import { Biome } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BiomeService {
  
  private apiService = inject(ApiService);
  
  private _currentBiome = signal<Biome | null>(null);
  public currentBiome = computed(() => this._currentBiome());

  getBiomes() :Observable<MyResponse<Biome[]>>{
    return this.apiService.getAll<Biome[]>("biome")
  }

  getBiome(biome_id:string):Observable<MyResponse<Biome>> {
    return this.apiService.getById<Biome>("biome",biome_id)
  }

  editBiome(biomeForm:Biome ,biome_id:string):Observable<MyResponse<Biome>>  { 
    return this.apiService
      .update<Biome>("biome", biomeForm, biome_id)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }

  deleteBiome(biome_id:string):Observable<MyResponse<Record<string, never>>>  { 
    return this.apiService
      .delete<Record<string, never>>("biome",biome_id)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }

  setBiome(biome: Biome | null) {
    this._currentBiome.set(biome);
  }
  
  createBiome(biomeForm: Biome) {
    const { ...biomebody } = biomeForm
    return this.apiService
      .store<Biome>('biome', biomebody)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }
 

  

}
