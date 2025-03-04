let popularFoodsArray = [
    {
      favorited: false,
      name: "double burger",
      type: "Burger",
      price: "120",
      image: "images/1 (1).png",
    },
    {
      favorited: false,
      name: "Special burger",
      type: "Burger",
      price: "100",
      image: "images/burger.png",
    },
    {
      favorited: false,
      name: "Fanta",
      type: "Drink",
      price: "80",
      image: "images/1 (2).png",
    },
    {
      favorited: false,
      name: "Family sandwich",
      type: "Sandwich",
      price: "200",
      image: "images/1 (3).png",
    },
    {
      favorited: false,
      name: "Double burger",
      type: "Burger",
      price: "120",
      image: "images/1 (4).png",
    },
    {
      favorited: false,
      name: "vegetrian sandwich",
      type: "Sandwich",
      price: "180",
      image: "images/1 (5).png",
    },
  ];
  let nearestFoodsArray = [
    {
      favorited: false,
      name: "Peperoni",
      type: "Pizza",
      price: "120",
      image: "images/pizza1.png",
    },
    {
      favorited: false,
      name: "Double burger",
      type: "Burger",
      price: "120",
      image: "images/1 (4).png",
    },
    {
      favorited: false,
      name: "Super burger",
      type: "Burger",
      price: "100",
      image: "images/burger.png",
    },
  
    {
      favorited: false,
      name: "Cheese burger",
      type: "Burger",
      price: "200",
      image: "images/1 (1).png",
    },
    {
      favorited: false,
      name: "Margareta",
      type: "Pizza",
      price: "120",
      image: "images/pizza2.png",
    },
    {
      favorited: false,
      name: "vegetrian sandwich",
      type: "Sandwich",
      price: "180",
      image: "images/sandwich.png",
    },
  ];

// Open a food info 
let openedItem = []

function kk(){
  openedItem.push(card)
  console.log(openedItem);
}

  function cardGenerator(cardsArray, cardsContainer) {
    cardsContainer.innerHTML = "";
    cardsArray.forEach(function (card) {
      let heartIcon = "fa-regular";
      if (card.favorited == true) {
        heartIcon = "fa-solid";
      } else {
        heartIcon = "fa-regular";
      }
      let cardElem = document.createElement('div')
      cardElem.classList.add('card')
      if (card.count) {

        cardElem.addEventListener('dblclick',()=>{
          let findedIndex =cartItemsArray.indexOf(card)
          cartItemsArray.splice(findedIndex,1)
          cardGenerator(cartItemsArray,cartItemsContainer)
          totalPrice =0
          cartItemsArray.forEach(food=>{
            totalPrice += food.count * Number(food.price)
            totalPriceElem.innerHTML = totalPrice +' Toman'
          })

        })

        cardElem.innerHTML+=`
        <img src="../${card.image}" alt="${card.name + 'image'}" class="food-image">
        <span class="food-name">${card.name}</span>
        <span class="food-type">${card.type}</span> 
        <span class="price">Toman ${card.price} <span class="count">Count: ${card.count}</span></span>
        `

        
      }else{
      cardElem.innerHTML=`
              <i class="${heartIcon} fa-heart"></i>
              <img src="../${card.image}" alt="${card.name + 'image'}" class="food-image">
              <span class="food-name">${card.name}</span>
              <span class="food-type">${card.type}</span> 
              <span class="price">Toman ${card.price}<i class="fa-solid fa-square-plus"></i></span>
              `
            
              cardElem.addEventListener('click',()=>{
                
                let cartImg = document.getElementById('cart-img')   
                let cartName = document.getElementById('name')
                let cartType = document.getElementById('type')
                let cartPrice = document.getElementById('price')
                console.log(cartName,cartPrice,cartType);
        
                cartImg.setAttribute('src','../'+card.image)
                cartName.innerHTML = card.name
                cartType.innerHTML = card.type
                cartPrice.innerHTML = card.price 
        
                cartSection.style.display = 'grid' 
                
              })
            }
            cardsContainer.append(cardElem)              


              
    });


  }
  
// login codes
let users =[]
window.addEventListener('load',()=>{
  if (localStorage.getItem('users') != null) {
    users = (JSON.parse(localStorage.getItem('users')))
  }
})

let loggedUser = []

// Cart codes 
let cartItemsArray = []
let cartItemsContainer = document.querySelector('#all-cart-items')
let addToCartBtn = document.getElementById('addToCart')
let totalPrice = 0
let totalPriceElem = document.getElementById('total-price')

addToCartBtn.addEventListener('click',()=>{
  console.log(numberOfMeal);
  
  if (Number(numberOfMeal.innerHTML) > 0) {
    
    let item = {
      image: document.getElementById('cart-img').getAttribute('src'),
      name:document.getElementById('name').innerHTML ,
      type:document.getElementById('type').innerHTML ,
      price:document.getElementById('price').innerHTML ,
      count: Number(numberOfMeal.innerHTML)
    }
    cartItemsArray.push(item)
    numberIndex =0
    numberOfMeal.innerHTML = numberIndex
    totalPrice =0
    cardGenerator(cartItemsArray,cartItemsContainer)
    cartItemsArray.forEach(food=>{
      totalPrice += food.count * Number(food.price)
      totalPriceElem.innerHTML = totalPrice +' Toman'
    })


    console.log(cartItemsArray,cartItemsContainer);
    
  }
  cartSection.style.display = 'none'
  setTimeout(() => {

    alert("Your item added to your cart")
  }, 10);



})