import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyCoolBindingsComponent } from './my-cool-bindings/my-cool-bindings.component';
import { InputThangsComponent } from './input-thangs/input-thangs.component';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalizePipe } from './my-pipes/capitalize.pipe';
import { EmojifyPipe } from './my-pipes/emojify.pipe';
import { DoTheSearchPipe } from './my-pipes/do-the-search.pipe';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyCoolBindingsComponent,
    InputThangsComponent,
    PipesComponent,
    CapitalizePipe,
    EmojifyPipe,
    DoTheSearchPipe,
    DirectivesExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
