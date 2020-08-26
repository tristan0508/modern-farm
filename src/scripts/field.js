const fieldOfPlants = [];

export const addPlant = (objSeed) => {
    if(Array.isArray(objSeed) === true ){
        objSeed.forEach(corn => {
            fieldOfPlants.push(corn)
        });
    }
    else{
    fieldOfPlants.push(objSeed)};
};

//split corn using isArray

export const usePlants = () =>{
    return fieldOfPlants;
}

