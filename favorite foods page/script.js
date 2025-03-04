let favoriteFoods = document.querySelector('.favorite-foods')

window.addEventListener('load',()=>{
    console.log(favoriteFoods,favoritesArray);
    
    cardGenerator(favoritesArray,favoriteFoods)
})