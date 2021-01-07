import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "../shared/input/input.component";
import { InputModule } from "../shared/input/input.module";
import { PersonAddComponent } from "./person-add/person-add.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { PersonRoutingModule } from "./person-routing.module";
import { PersonUpdateComponent } from "./person-update/person-update.component";
import { PersonService } from "./person.service";
import { PersonListComponent } from "./personList/personList.component";

@NgModule({
    declarations: [
        PersonAddComponent,
        PersonDetailsComponent,
        PersonUpdateComponent,
        PersonListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PersonRoutingModule,
        HttpClientModule,
        InputModule,
    ],
    providers: [
        PersonService
    ],
    exports: []
})
export class PersonModule {}