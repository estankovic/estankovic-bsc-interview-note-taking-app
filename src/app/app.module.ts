import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BACKEND_BASE_URL } from './notes/notes.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        // issue https://stackoverflow.com/questions/60464978/typeerror-cannot-assign-to-read-only-property-tview-of-object-object-object
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false
        }
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 250,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Full
    })
  ],
  providers: [
    {
      provide: BACKEND_BASE_URL,
      useValue: environment.backendUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
