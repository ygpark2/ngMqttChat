import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class SettingsService {
    public environment = environment;
}
