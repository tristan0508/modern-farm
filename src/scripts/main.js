console.log("Welcome to the main module")
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { usePlants } from './field.js';
import { catalog } from './catalog.js';



createPlan();
const finalPlan = createPlan();

plantSeeds(finalPlan);
const plants = usePlants();

console.log(catalog(plants));





