// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "William Smith" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

//reference the text
let qtyGB = document.querySelector(".qty-gb")
let qtyCC = document.querySelector(".qty-cc")
let qtySug=document.querySelector(".qty-sugar")




// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb/minus and referencing the buttons
const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for gb cookie
gbPlusBtn.addEventListener('click', function() {
gb = gb + 1

qtyGB.textcontent = "gb:" +1
})

// Event listener for clicks on the "+" button for cc cookie
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    
    Qtycc.TextContent = "qty-cc: "+ 1
    })
// Event listener for clicks on the "+" button for sugar cookie
gbPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    
    qtySug.TextContent = "qty-sugar: "+ 1
  })

    
gbminusButton.addEventListener("click", function(){

    if (gb > 0 ){
   gb = gb-1  
   qtyGb.textContent = "Quantity: "+ totalQuantity
    }
})

ccminusButton.addEventListener("click", function(){

    if (cc > 0 ){
   cc = cc-1  
   quantityText.textContent = "Quantity: " - totalQuantity
    }
})

sugarminusButton.addEventListener("click", function(){

    if (sugar > 0 ){
   sugar = sugar-1  
   quantityText.textContent = "Quantity: " - totalQuantity
    }
})