import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OrderAddComponent } from "./order-add/order-add.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { OrderUpdateComponent } from "./order-update/order-update.component";
import { OrderListComponent } from "./orderList/orderList.component";

const routes: Routes = [
    {path:'', component: OrderListComponent},
    {path:'add',component: OrderAddComponent},
    {path:'details/:id', component: OrderDetailsComponent},
    {path:'update/:id', component: OrderUpdateComponent},
    {path:'delete/:id', component: OrderListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule{}