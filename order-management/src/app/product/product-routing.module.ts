import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductUpdateComponent } from "./product-update/product-update.component";
import { ProductListComponent } from "./productList/productList.component";

const routes: Routes = [
    {path:'', component: ProductListComponent},
    {path:'add',component: ProductAddComponent},
    {path:'details/:id', component: ProductDetailsComponent},
    {path:'update/:id', component: ProductUpdateComponent},
    {path:'delete/:id', component: ProductListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule{}