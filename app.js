window.onload = () => {
	let button = document.querySelector('#btn')
};

function BMI(){

// taking user input into variables 
	let height = parseInt(document.querySelector('#height').value)

	let weight = parseInt(document.querySelector('#weight').value)

	let result = document.querySelector('#result')

// checking if user input is valid or not 

	if(height == "" || isNaN(height))
		result.innerHTML = 'provide a valid heght'
	else if(weight == "" || isNaN(weight))
		result.innerHTML = 'provide a valid weight'
	else{
// result fixed upto 2 decimal places

		let bmi = ((weight / (height * height)) * 10000).toFixed(2)

		if(bmi < 18.6) 
			result.innerHTML = `Under Weight : <span> ${bmi} </span>`

		else if(bmi >= 18.6 && bmi < 24.9)
			result.innerHTML = `Normal : <span>${bmi}</span>`

		else
			result.innerHTML = `Over Weight : <span>${bmi}</span>`
	}
} 
