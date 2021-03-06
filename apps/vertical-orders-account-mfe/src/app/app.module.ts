/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountContainerComponent } from './components/account-container/account-container.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderNewComponent } from './components/order-new/order-new.component';
import { OrdersContainerComponent } from './components/orders-container/orders-container.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountDetailsFormComponent } from './components/account-details-form/account-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersContainerComponent,
    AccountContainerComponent,
    OrdersComponent,
    OrderNewComponent,
    OrderDetailsComponent,
    AccountDetailsFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'orders-account/orders',
          component: OrdersComponent,
        },
        {
          path: 'orders-account/orders/:id',
          component: OrderDetailsComponent,
        },
        {
          path: 'orders-account/order',
          component: OrderNewComponent,
        },
        { path: '**', component: OrdersComponent },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('vertical-orders-account-mfe', ce);
  }
}
