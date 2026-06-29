function inflationCalculator () {
	let inflationRate = document.querySelector('#inflationRate');
	let money = document.querySelector('#money');
	let years = document.querySelector('#years').value;
	
	// parseFloat sluzi za pretvaranje stringa u broj sa zarezom
	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);
	years = parseFloat(years);

	// formula za izravunavanje inflacije
	let worth = money + (money * (inflationRate / 100));

	for(let i = 1; i < years; i++) {
		worth += worth * (inflationRate / 100);

	};
	
	// toFixed sluzi da broj svedemo samo na odrednjen broj decimala 
	worth = worth.toFixed(2);

	let newElement = document.createElement('div');
	newElement.className = 'new-value';
	newElement.innerText = `Danasnjih ${money}€ vredi isto kao i ${worth}€ za ${years} godina.`;
	document.querySelector('.container').appendChild(newElement);                        

	
};