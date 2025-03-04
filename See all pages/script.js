
  let allFoods = document.getElementById('all-foods')
  console.log(allFoods);


  window.addEventListener('load',()=>{
    if (document.body.id=='popular') {
      
      cardGenerator(popularFoodsArray,allFoods)
    }else if(document.body.id == 'nearest'){
      cardGenerator(nearestFoodsArray,allFoods)
    }
  })
