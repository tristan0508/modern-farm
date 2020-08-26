export const catalog = (arrayFoodObj) => {
    const contentElement = document.querySelector(".container")
    for (const obj of arrayFoodObj){
        contentElement.innerHTML += `<section class="plant">${obj.type}</section>`
          
    }
}