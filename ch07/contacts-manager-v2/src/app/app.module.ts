import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, BaseRequestOptions, Headers, RequestOptions } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdToolbarModule, MdListModule, MdCardModule, MdDialogModule, MdSnackBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { UserListComponent, UserListService, UserDetailComponent, UserDetailService } from './user-list';
import { MyApiGatewayService } from './my-api-gateway.service';
import { API_URL_TOKEN, API_VER_TOKEN } from './app.tokens';

// export class MyRequestOptions extends BaseRequestOptions {
//   headers = headerInfo;
// }

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  providers: [
    UserListService,
    UserDetailService,
    MyApiGatewayService,
    { provide: API_URL_TOKEN, useValue: '/api' },
    { provide: API_VER_TOKEN, useValue: 'v1' }
  ],
  // {provide: RequestOptions, useClass: MyRequestOptions}],
  bootstrap: [AppComponent],
  entryComponents: [UserDetailComponent]
})
export class AppModule { }
