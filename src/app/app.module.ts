import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from 'src/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';
import { HeaderComponent } from "./component/header/header.component";
import { LoadingComponent } from './component/loading/loading.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        CustomPipePipe,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        SweetAlert2Module.forRoot(),
        HeaderComponent,
        LoadingComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    ],
})
export class AppModule { }
