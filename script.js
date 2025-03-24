let openDiv = document.querySelector('#openModal')
let modal = document.querySelector(".modal");
let closeDiv = document.querySelector('.close-modal')

openDiv.addEventListener('click',()=>{
	modal.style.display = 'block'
})

closeDiv.addEventListener("click",()=>{
	modal.style.display = 'none'
})
