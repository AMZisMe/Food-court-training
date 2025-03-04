let $ = document;

// Navbar codes
// Variables
let navOpener = $.getElementById("opener");
let navCloser = $.getElementById("closer");
let desktopNavbar = $.getElementById("desktop-nav");
let mobileNavbar = $.querySelector(".mobile-navbar-container");

// Functions
function classGiver() {
  desktopNavbar.classList.toggle("closed-navbar");
  desktopNavbar.classList.toggle("opened-navbar");

  navOpener.classList.toggle("closed-navbar");
  navOpener.classList.toggle("opened-navbar");
}
function hideMobileNavbar(scrolledValue,scrollHeight) {
  if (scrolledValue > scrollHeight*0.33-100) {
    mobileNavbar.style.transform='translateY(300px)'
  }else{
    mobileNavbar.style.transform='translateY(0)'
  }
}

// Events 
navOpener.addEventListener("click", classGiver);
navCloser.addEventListener("click", classGiver);


window.addEventListener('scroll',function(){
  let documentElem =this.document.documentElement
hideMobileNavbar(documentElem.scrollTop,documentElem.scrollHeight);
})

// Open and Close favorites page
document.getElementById('close-favorites-page').addEventListener('click',()=>{
  favoriteFoodsPage.style.display='none'
})

let goToFavoritePage =document.querySelectorAll('.go-to-fav-page')
console.log(goToFavoritePage);
goToFavoritePage.forEach(function(item){
  item.addEventListener('click',()=>{
    favoriteFoodsPage.style.display = 'block'
  
  })
})

// Main codes
// Defining variabels


let popularFoodsContainer = $.getElementById("popular-food-cards");
let nearestFoodsContainer = $.getElementById("nearest-food-cards");
let filters = $.querySelectorAll('.filter')
let heartIcons


// Defining functions


function filtering(filterBtn,foodsArray,foodsContainer){
    let filteredFoods
    if (filterBtn.textContent == 'All') {
        filteredFoods = [...foodsArray] 
    }else{
     filteredFoods = foodsArray.filter(item => item.type == filterBtn.textContent);
    }
     console.log(filteredFoods,filterBtn);
    
    cardGenerator(filteredFoods,foodsContainer)
    
}

// Defining events
let logOut= document.querySelector('.login')

logOut.addEventListener('click',()=>{

  
  if (loggedUser[0] != null) {
    localStorage.removeItem('loggedInUser')

    logOut.innerHTML = "Login or Sign-Up"
    logOut.classList.remove('fa-arrow-right-from-bracket')
    logOut.parentElement.setAttribute('href','../lgin/sign up form/index.html')
    
    window.location.reload()
  }
})


let favoriteFoodsPage = document.querySelector('.favorites')
let allFavoriteFoods = document.querySelector('.all-favorite-foods')
let favoritesArray = []
let helpFavoritesArray = []

window.addEventListener("load", function () {
  cardGenerator(popularFoodsArray, popularFoodsContainer);
  cardGenerator(nearestFoodsArray, nearestFoodsContainer);

  // Get users name and show it 
  let userName = this.document.getElementById('user-name')

  loggedUser = JSON.parse(localStorage.getItem('loggedInUser'))
  
  if (loggedUser != null) {
    userName.innerHTML=loggedUser[0].username
  } else{
    userName.innerHTML = "Login or Sign-Up"
    console.log(loggedUser);
    logOut.parentElement.setAttribute('href','../lgin/sign up form/index.html')
  }

  // favorite foods codes 

   heartIcons = document.querySelectorAll('.card .fa-heart')
   addFavorites(heartIcons)

  

});

function addFavorites(icons){
  icons.forEach((icon)=>{
    icon.addEventListener('click',()=>{
      
      icon.classList.toggle('fa-solid')
      icon.classList.toggle('fa-regular')


      if (icon.classList.contains('fa-solid')) {
        favoritesArray.push(icon.parentElement)
        helpFavoritesArray = [...favoritesArray]

        allFavoriteFoods.innerHTML=''
        console.log(favoritesArray)

        helpFavoritesArray.forEach((item)=>{
          let clone = item.cloneNode(true)
           allFavoriteFoods.appendChild(clone)
        })
      }else if (icon.classList.contains('fa-regular')) {
        
        let index = favoritesArray.indexOf(icon.parentElement)
        favoritesArray.splice(index,1)
        helpFavoritesArray = [...favoritesArray]
        console.log(favoritesArray);
        
        
        allFavoriteFoods.innerHTML=''
        console.log(favoritesArray)
        
        helpFavoritesArray.forEach((item)=>{
          let clone = item.cloneNode(true)
          allFavoriteFoods.appendChild(clone)
        }) 
      }
      heartIcons = document.querySelectorAll('.card .fa-heart')
      
      
    })
  })
  
}


// Filtering section code 

filters.forEach(function(filter){
    
    filter.addEventListener('click',function(){
        
        
        filters.forEach(function(removeClass){
            removeClass.classList.remove('selected-filter')
        })
        
        filter.classList.add('selected-filter')
        
        console.log(filter.textContent);
        
        filtering(filter,popularFoodsArray,popularFoodsContainer)
        filtering(filter,nearestFoodsArray,nearestFoodsContainer)

    })
})

// The cart sections codes
  // Definning valriables
  let cartSection = document.querySelector('.cart')
  let closeCart = document.querySelector('.close-cart')
  let openCartSection = document.querySelectorAll('.open-cart')
  
  // Definning events 
  // Open all cart Items section 
  let cartItems = document.querySelector('.cartItems')
  let closeCartSection = document.querySelector('.close-cart-section')

  openCartSection.forEach(item=>{
    item.addEventListener('click',()=>{
      cartItems.style.display = 'block'
    })
  })
  // Close cart 
  closeCart.addEventListener('click', ()=>{
    cartSection.style.display = 'none'
  })
  closeCartSection.addEventListener('click', ()=>{
    cartItems.style.display = 'none'
  })

// Increace and decreace number of meals 
  // Variables
  let increaceBtn = document.getElementById('increace')
  let numberOfMeal = document.getElementById('number-of-meal')
  let decreaceBtn = document.getElementById('decreace')
  let numberIndex =0 

  // Events 
  increaceBtn.addEventListener('click',()=>{
    numberIndex++
    numberOfMeal.innerHTML=numberIndex
  })
  decreaceBtn.addEventListener('click',()=>{
    numberIndex--
    if (numberIndex<0) {
      numberIndex=0
    }
    numberOfMeal.innerHTML=numberIndex
  })