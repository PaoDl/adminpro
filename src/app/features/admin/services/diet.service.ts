import { Injectable, computed, inject, signal } from '@angular/core';
import { MyResponse } from '@core/models';
import { ApiService } from '@core/services';
import { Observable, catchError, throwError } from 'rxjs';
import { Diet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  private apiService = inject(ApiService);
  
  private _currentDiet = signal<Diet | null>(null);
  public currentDiet = computed(() => this._currentDiet());

  getDiet(diet_id: string):Observable<MyResponse<Diet>> {
    return this.apiService.getById<Diet>("diet",diet_id)
  }
  
  getDiets() :Observable<MyResponse<Diet[]>>{
    return this.apiService.getAll<Diet[]>("diet")
  }
  
  updateDiet(diet_id:string, diet: Diet ):Observable<MyResponse<Diet>>  { 
    return this.apiService
      .update<Diet>("diet", diet, diet_id)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }
  
  deleteDiet(diet_id:string):Observable<MyResponse<Record<string, never>>>  { 
    return this.apiService
      .delete<Record<string, never>>("diet",diet_id)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }
  setDiet(diet: Diet) {
    this._currentDiet.set(diet);
  }
}
