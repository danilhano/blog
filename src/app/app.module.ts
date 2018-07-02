import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

// Importando o modulo para requisições http
import { HttpClientModule } from '@angular/common/http';

// Importando o serviço
import { BlogService } from './blog.service';



@NgModule({
  //Declarando os componentes
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],

  // Declarando o serviço
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
