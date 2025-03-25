let openDiv = document.querySelector('#openModal')
let modal = document.querySelector(".modal");
let closeDiv = document.querySelector('.close-modal')

function closeModal(){
	modal.style.display = 'none';
}

openDiv.addEventListener('click',()=>{
	modal.style.display = 'block';
})

closeDiv.addEventListener("click",closeModal);

window.addEventListener('click',(e)=>{
	if(e.target === modal){
		closeModal();
	}
})
