import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
