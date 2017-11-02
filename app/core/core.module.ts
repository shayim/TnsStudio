import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NgModule } from '@angular/core';

import { CORE_PROVIDERS } from './services';


@NgModule({
  imports: [NativeScriptModule],
  providers: [...CORE_PROVIDERS],
  exports: [NativeScriptModule]
})
export class CoreModule { }