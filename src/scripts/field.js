const fieldOfPlants = [];

export const addPlant = (objSeed) => {
    fieldOfPlants.push(objSeed);
};

export const usePlants = () =>{
    return fieldOfPlants;
}

