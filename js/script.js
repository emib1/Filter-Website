const allButton = document.querySelector(".all");
const cakeButton = document.querySelector(".cake");
const cupcakeButton = document.querySelector(".cupcake");
const donutButton = document.querySelector(".donut");
const icecreamButton = document.querySelector(".icecream");
const items = document.querySelectorAll(".item-img");


/********All Button******** */

allButton.addEventListener("click", function(){
    for (let i = 0; i < items.length; i++){
        items[i].classList.remove("hidden");
      }
});


/******************* */
cakeButton.addEventListener("click", function(){
    for (let i = 0; i < items.length; i++){
        if(items[i].classList.contains("cake")){
            items[i].classList.remove("hidden");
        } else{
            items[i].classList.add("hidden")
        }

      }
})


/*************************/

cupcakeButton.addEventListener("click", function(){
    for (let i = 0; i < items.length; i++){
        if(items[i].classList.contains("cupcake")){
            items[i].classList.remove("hidden");
        } else{
            items[i].classList.add("hidden")
        }

      }
})



/***************** */

donutButton.addEventListener("click", function(){
    for (let i = 0; i < items.length; i++){
        if(items[i].classList.contains("donut")){
            items[i].classList.remove("hidden");
        } else{
            items[i].classList.add("hidden")
        }

      }
})



/************************* */


icecreamButton.addEventListener("click", function(){
    for (let i = 0; i < items.length; i++){
        if(items[i].classList.contains("icecream")){
            items[i].classList.remove("hidden");
        } else{
            items[i].classList.add("hidden")
        }

      }
})


/********************cart */


const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");


cart.addEventListener("click", function(){
   cartItems.classList.toggle("hide");
});






/************************* */