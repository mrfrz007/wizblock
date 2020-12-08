import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { CommentsComponent } from './comments/comments.component';
import { ChildboxComponent } from './childbox/childbox.component';
import { DatacontainerDirective } from './comments/comments.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LowerNavComponent } from './lower-nav/lower-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentboxComponent,
    CommentsComponent,
    ChildboxComponent,
    DatacontainerDirective,
    NavbarComponent,
    SidebarComponent,
    LowerNavComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
