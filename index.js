const color = (color,p)=>{
	return p.style.color=color;
};
const input = document.querySelector('input.describe');
const p = document.querySelector('p.describe');
const button = document.querySelector('button.describe');
const myheadind = document.querySelector('h1')
const toggle_list = document.querySelector('.toggle_list');
const orderlistbutton = document.querySelector('button.orderlistbutton');
const  orderlistinput = document.querySelector('input.orderlistinput');
const orderlistbuttonremover = document.querySelector('button.orderlistbuttonremover');
 p.title ="list describe";
 const listitems = document.getElementsByTagName('li');
 for(let i = 0; i<listitems.length; i++){
 listitems[i].addEventListener('mouseover',()=>{
 	listitems[i].textContent= listitems[i].textContent.toUpperCase();
 }); 
 listitems[i].addEventListener('mouseout',()=>{
 	listitems[i].textContent= listitems[i].textContent.toLowerCase();
 }); 
}

const  hidelist = document.querySelector('.hidelist');
hidelist.addEventListener('click',()=>{
	if(toggle_list.style.display=='none'){
		toggle_list.style.display = 'block';
		hidelist.innerHTML ='hide list';
	}
	else{
	toggle_list.style.display = 'none';
	hidelist.innerHTML = 'show list';
}
})
button.addEventListener('click',()=>{
	p.innerHTML =input.value;
	color('green',p);
	input.value = '';
});
orderlistbutton.addEventListener('click',()=>{
	let ul =document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = orderlistinput.value;
	ul.appendChild(li);
	orderlistinput.value ='';
});
orderlistbuttonremover.addEventListener('click',()=>{
	let ul =document.getElementsByTagName('ul')[0];
	let li = document.querySelector('li:last-child');
	ul.removeChild(li); 
});


