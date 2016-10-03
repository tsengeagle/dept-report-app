import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApportionMasterComponent } from './apportion-master/apportion-master.component';
import { ApportionDetailComponent } from './apportion-detail/apportion-detail.component';
import { ApportionService } from './apportion.service';

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
  providers: [ ApportionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
