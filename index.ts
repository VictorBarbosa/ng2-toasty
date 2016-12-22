// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty

import { NgModule, ModuleWithProviders } from "@angular/core";

export * from './src/toasty.service';
export * from './src/toasty.component';

import { ToastyComponent } from './src/toasty.component';
import { ToastComponent } from './src/toast.component';
import { ToastyService, toastyServiceFactory } from './src/toasty.service';

export let providers = [{ provide: ToastyService, useFactory: toastyServiceFactory }];

@NgModule({
  declarations: [ToastComponent, ToastyComponent],
  exports : [ToastComponent, ToastyComponent],
  providers: providers
})
export class ToastyModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    }
}