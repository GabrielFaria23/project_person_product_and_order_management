import { Person } from "../person/person.model";
import { Product } from "../product/product.model";

export class Order{
    id: number;
    dateHour: Date;
    person: Person;
    products: Product[];
}