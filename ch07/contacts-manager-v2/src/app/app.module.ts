import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, BaseRequestOptions, Headers, RequestOptions } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdToolbarModule, MdListModule, MdCardModule, MdDialogModule, MdSnackBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { UserListComponent, UserListService, UserDetailComponent, UserDetailService } from './user-list';

// const headerInfo = new Headers();
// headerInfo.set('Authorization', 'angular-is-awesome');

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
  providers: [UserListService, UserDetailService],
  // {provide: RequestOptions, useClass: MyRequestOptions}],
  bootstrap: [AppComponent],
  entryComponents: [UserDetailComponent]
})
export class AppModule { }
