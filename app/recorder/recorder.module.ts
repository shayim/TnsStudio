import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RECORDER_PROVIDERS } from './services';

@NgModule({
  imports: [NativeScriptModule],
  providers: [...RECORDER_PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RecorderModule {}