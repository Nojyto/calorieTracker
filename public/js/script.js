const curDate = new Date().toJSON().slice(0,10).replace(/-/g,"/")
let cal = document.getElementById("cal")
let wat = document.getElementById("water")

window.onload = (e) => {
	let dailyCalories = parseInt(localStorage.getItem("dailyCalories"))
	if(!dailyCalories){
		while(true){
			let desiredCalories = parseInt(prompt("Enter desired daily calorie intake"))
			if(0 < desiredCalories && desiredCalories < 20000){
				localStorage.setItem("dailyCalories", desiredCalories)
				dailyCalories = desiredCalories
				break
			}
			alert("Need to enter a valid value to proceed")
		}
	}
	
	let curCalories = localStorage.getItem(curDate + " cal")
	if(!curCalories){
		localStorage.setItem(curDate + " cal", dailyCalories)
		curCalories = dailyCalories
	}
	cal.innerText = curCalories


	let dailyWater = parseFloat(localStorage.getItem("dailyWater"))
	if(!dailyWater){
		while(true){
			let desiredWater = parseFloat(prompt("Enter desired daily water intake")).toFixed(2)
			if(0 < desiredWater && desiredWater < 24){
				localStorage.setItem("dailyWater", desiredWater)
				dailyWater = desiredWater
				break
			}
			alert("Need to enter a valid value to proceed")
		}
	}
	
	let curWater = localStorage.getItem(curDate + " wat")
	if(!curWater){
		localStorage.setItem(curDate + " wat", dailyWater)
		curWater = dailyWater
	}
	wat.innerText = curWater
}

document.getElementById("takeCalories").addEventListener("keypress", (e) => {
	if(e.target.nodeName === "INPUT" && e.key === "Enter") {
		let userInput = parseInt(e.target.value), curValue = parseInt(cal.innerText)
		if(0 < userInput && userInput <= curValue){
			cal.innerText = curValue - userInput
			ocalStorage.setItem(curDate + " cal", cal.innerText)
		}
	}
})

document.getElementById("takeWater").addEventListener("keypress", (e) => {
	if(e.target.nodeName === "INPUT" && e.key === "Enter") {
		let userInput = parseFloat(e.target.value).toFixed(2), curValue = parseFloat(wat.innerText).toFixed(2) * 1000
		if(0 < userInput && userInput <= curValue){
			wat.innerText = (curValue - userInput) / 1000
			localStorage.setItem(curDate + " wat", wat.innerText)
		}
	}
})

document.getElementById("resetValues").addEventListener("click", (e) => {
	let dailyCalories = parseInt(localStorage.getItem("dailyCalories"))
	cal.innerText = dailyCalories
	localStorage.setItem(curDate + " cal", dailyCalories)

	let dailyWater = parseFloat(localStorage.getItem("dailyWater")).toFixed(2)
	wat.innerText = dailyWater
	localStorage.setItem(curDate + " wat", dailyWater)
})

document.getElementById("changeValues").addEventListener("click", (e) => {
	localStorage.clear()
	window.location.reload()
})