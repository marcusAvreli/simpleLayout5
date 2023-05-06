import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { CONFIG } from "../app-config";
import { AppCommonModule } from "./common/app-common.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ,CoreModule.forRoot(CONFIG)
	, AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
