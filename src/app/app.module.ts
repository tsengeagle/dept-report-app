import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApportionMasterComponent } from './apportion-master/apportion-master.component';
import { ApportionDetailComponent } from './apportion-detail/apportion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ApportionMasterComponent,
    ApportionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
