import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "../shared/input/input.component";
import { InputModule } from "../shared/input/input.module";

import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductUpdateComponent } from "./product-update/product-update.component";
import { ProductService } from "./product.service";
import { ProductListComponent } from "./productList/productList.component";

@NgModule({
    declarations: [
        ProductAddComponent,
        ProductDetailsComponent,
        ProductUpdateComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductRoutingModule,
        HttpClientModule,
        InputModule,
    ],
    providers: [
        ProductService
    ],
    exports: [ProductListComponent]
})
export class ProductModule {}