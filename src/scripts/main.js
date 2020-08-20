console.log("Welcome to the main module")
import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';



createPlan();
const assignedFunc = createPlan();
console.log(assignedFunc);

createAsparagus();
const assignAsparagus = createAsparagus();
console.log(assignAsparagus);

createCorn();
const assignCorn = createCorn();
console.log(assignCorn);

createPotato();
const assignPotato = createPotato();
console.log(assignPotato);

createSoybean();

createSunflower();

createWheat();