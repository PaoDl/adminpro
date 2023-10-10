import { Injectable, inject } from '@angular/core';

import { ApiService } from '@core/services';
import { ProfileForm } from '../models';
import { Observable, catchError, throwError } from 'rxjs';
import { MyResponse } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiService = inject(ApiService);

  editProfile(profile: ProfileForm, id: string): Observable<MyResponse<ProfileForm>> {
    return this.apiService
      .update<ProfileForm>('users', profile, id)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }
}