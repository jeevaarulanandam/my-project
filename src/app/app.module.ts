import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header.component';

import { DataService } from './services/data.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService],
})
export class AppModule { 
  
}
