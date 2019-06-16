/**
* JS - Operadores Lógicos
* @author Professor José de Assis
* https://www.youtube.com/user/ProfessorJosedeAssis
*/

let sw1 = false
let sw2 = false
let broken = false
let receive
let identify = window.location.pathname

function sw(receive){	
	if(receive == 1 && sw1 == false){
		document.getElementById('sw1').src = 'swon.png'
		sw1 = true
	}else if(receive == 1 && sw1 == true){
		document.getElementById('sw1').src = 'swoff.png'
		sw1 = false
	}else if(receive == 2 && sw2 == false){
		document.getElementById('sw2').src = 'swon.png'
		sw2 = true
	}else if(receive == 2 && sw2 == true){
		document.getElementById('sw2').src = 'swoff.png'
		sw2 = false
	}
	//lamp
	if(receive == 3){
		document.getElementById('lamp').src = 'broken.jpg'
		broken = true
	}
	//and
	if (identify == '/logical-operators/and.html' && broken != true){
		if(sw1 == true && sw2 == true){
			document.getElementById('lamp').src = 'on.jpg'
		}else{
			document.getElementById('lamp').src = 'off.jpg'
		}
	}
	//or
	if (identify == '/logical-operators/or.html' && broken != true){
		if(sw1 == true || sw2 == true){
			document.getElementById('lamp').src = 'on.jpg'
		}else{
			document.getElementById('lamp').src = 'off.jpg'
		}
	}
	//not
	if (identify == '/logical-operators/not.html' && broken != true){
		if(!sw1){
			document.getElementById('lamp').src = 'on.jpg'
		}else{
			document.getElementById('lamp').src = 'off.jpg'
		}
	}		
}