import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";

const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'people', loadChildren: () => import('src/app/person/person.module').then(m => m.PersonModule)},
    {path: 'products', loadChildren: () => import('src/app/product/product.module').then(m => m.ProductModule)},
    {path: 'orders', component: OrderComponent},    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}