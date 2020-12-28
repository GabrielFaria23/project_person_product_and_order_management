import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { PersonComponent } from "./person/person.component";
import { ProductComponent } from "./product/product.component";

const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'people', component: PersonComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}