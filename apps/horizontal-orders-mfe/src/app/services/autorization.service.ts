import { Injectable } from '@angular/core';
import { StorageService } from '@micro-frontends-thesis-apps/shared';

@Injectable({
  providedIn: 'root',
})
export class AutorizationService {
  public isAuthorized: boolean | undefined;

  constructor(private _storageService: StorageService) {
    if (_storageService.retrieve('isAuthorized') !== '') {
      this.isAuthorized = !!_storageService.retrieve('isAuthorized');
    }
  }
}
