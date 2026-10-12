import { typecuisine } from "./typecuisine.model";

export class Plat {
    idPlat? : number;
    nomPlat? : string;
    prixPlat? : number;
    dateAjout? : Date ;
    typecuisine! : typecuisine;
}