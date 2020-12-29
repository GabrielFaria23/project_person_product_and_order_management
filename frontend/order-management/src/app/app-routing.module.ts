import { componentFactoryName } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { PersonAddComponent } from "./person/person-add/person-add.component";
import { PersonDetailsComponent } from "./person/person-details/person-details.component";
import { PersonUpdateComponent } from "./person/person-update/person-update.component";
import { PersonListComponent } from "./person/personList/personList.component";
import { ProductComponent } from "./product/product.component";

const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'people', component: PersonListComponent},
    {path:'people/add',component: PersonAddComponent},
    {path:'people/details/:id', component: PersonDetailsComponent},
    {path:'people/update/:id', component: PersonUpdateComponent},
    {path:'people/delete/:id', component: PersonListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}