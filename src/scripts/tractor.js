import { addPlant} from './field.js';
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";




export const plantSeeds = (yearPlan) => {
  
    for (const plan of yearPlan) {
        
        
        for (const seed of plan) {
            
            
            switch (seed) {
                case 'Asparagus':
                    addPlant(createAsparagus());
                break;
                case 'Corn':               
                    addPlant(createCorn());
                break;
                case 'Potato':
                    addPlant(createPotato());
                break;
                case 'Wheat':
                    addPlant(createWheat());
                break;
                case 'Soybean':
                    addPlant(createSoybean());
                break;
                case 'Sunflower':
                    addPlant(createSunflower());
                break;
            }
        }
    }
}
