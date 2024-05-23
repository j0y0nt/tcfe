import { Ingredient } from "./ingredient";

export interface Taco {
    id: number,
    name: string,
    createdAt: string,
    ingredients: Array<Ingredient>
}
