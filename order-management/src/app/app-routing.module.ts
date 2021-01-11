import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrderListComponent } from "./order/orderList/orderList.component";

const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'people', loadChildren: () => import('src/app/person/person.module').then(m => m.PersonModule)},
    {path: 'products', loadChildren: () => import('src/app/product/product.module').then(m => m.ProductModule)},
    {path: 'orders', loadChildren: () => import('src/app/order/order.module').then(m => m.OrderModule)},    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}