let overlay = document.getElementById('overlay');
let btnClose =  document.querySelectorAll('.close-modal');


function modalLogin(){
	let modalLogIn = document.querySelector('.modal-logIn').style.display = 'flex';
		overlay.style.display = 'flex';
}
function modalReg(){
	console.log('ok');
}

for (var i = 0; i < btnClose.length; i++) {
	btnClose[i].addEventListener('click', (event)=>{
		let form = event.target.closest('form').parentNode;
		form.style.display = 'none';
		overlay.style.display = 'none';

	});
}