import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { InputComponent } from "../shared/input/input.component";

import { PersonAddComponent } from "./person-add/person-add.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { PersonUpdateComponent } from "./person-update/person-update.component";
import { PersonListComponent } from "./personList/personList.component";

const routes: Routes = [
    {path:'', component: PersonListComponent},
    {path:'add',component: PersonAddComponent},
    {path:'details/:id', component: PersonDetailsComponent},
    {path:'update/:id', component: PersonUpdateComponent},
    {path:'delete/:id', component: PersonListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule{}