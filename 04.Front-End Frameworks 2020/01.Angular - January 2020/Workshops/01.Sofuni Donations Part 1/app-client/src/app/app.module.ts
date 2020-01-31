import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CauseListComponent } from './cause-list/cause-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CauseComponent } from './cause/cause.component'



@NgModule({
  declarations: [
    AppComponent,
    CauseListComponent,
    CauseComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
