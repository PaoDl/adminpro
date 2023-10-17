import { Biome } from "./biome.model";
import { Diet } from "./diet.model";

export interface Species {
 species_id: string;
 name:string;
 description:string;
 scientific_name: string;
 created_at:string;
 updated_at:string;
 biome: Biome;
 diets: Diet[];
}
