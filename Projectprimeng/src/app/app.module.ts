import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { DataTableModule, SharedModule, DialogModule, InputTextModule, ButtonModule } from 'primeng/primeng';

import { UserService } from './services/user.service'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        InputTextModule,
        DataTableModule,
        SharedModule,
        DialogModule,
        FormsModule,
        BrowserAnimationsModule,
        ButtonModule,
        HttpModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
