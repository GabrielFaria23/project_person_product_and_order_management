import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PersonModule } from "../person/person.module";
import { PersonListComponent } from "../person/personList/personList.component";
import { InputModule } from "../shared/input/input.module";
import { OrderAddComponent } from "./order-add/order-add.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderUpdateComponent } from "./order-update/order-update.component";
import { OrderService } from "./order.service";
import { OrderListComponent } from "./orderList/orderList.component";

@NgModule({
    declarations: [
        OrderAddComponent,
        OrderDetailsComponent,
        OrderUpdateComponent,
        OrderListComponent,
    ],
    imports: [        
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OrderRoutingModule,
        HttpClientModule,
        InputModule,
        PersonModule,
    ],
    providers: [
        OrderService
    ],
    exports: []
})
export class OrderModule {}