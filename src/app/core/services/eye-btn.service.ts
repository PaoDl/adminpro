import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EyeBtnService {

  public showEye = signal<boolean>(false);

  public toggleEye(): void {
    this.showEye.set(!this.showEye());
  }
}
