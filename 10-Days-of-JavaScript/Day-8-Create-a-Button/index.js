let counterDisplayer = document.querySelector(".cd")
let counterPlus = document.querySelector(".cp")

let count = 0


counterPlus.addEventListener("click", ()=>{
    count++
    counterDisplayer.innerHTML = count  
})




