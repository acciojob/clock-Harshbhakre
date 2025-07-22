let timer = document.querySelector("#timer")
let currentTime = new Date();
setInterval(()=>{
	timer.innerHTML = currentTime.toLocalString()
},1000)