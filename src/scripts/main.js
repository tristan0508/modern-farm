console.log("Welcome to the main module")
import { createPlan } from './plan.js';
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js';




createPlan();
const yearPlantingPlan = createPlan();
console.log("This is a string", yearPlantingPlan);


addPlant();

usePlants();

plantSeeds(yearPlantingPlan);


