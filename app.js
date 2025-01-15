let catScore = 0;
let dogscore = 0;





let catImg = document.querySelector(".meow");
let dogImg = document.querySelector(".woof");


let catPoints = document.querySelector(".c1");
let dogPoints = document.querySelector(".d1");

let doghouse = document.querySelector(".dogs");

catPoints.innerHTML = catScore;
dogPoints.innerHTML = dogscore;
// ---------------------------------------------QS


// --------------------------------------[DOG LOGIC]

const populateDogToScreen = (url) => {
	dogImg.setAttribute("src", url);
};

const getDog = async () => {
	const response = await fetch("https://dog.ceo/api/breeds/image/random");
	const jsonData = await response.json();
	let dogLink = jsonData.message;
	// --------> response === {}
	populateDogToScreen(dogLink);
};
// --------------------------------------[CAT LOGIC]
const populateCatToScreen = (url) => {
	catImg.setAttribute("src", url);
};

const getCat = async () => {
	let response = await fetch("https://api.thecatapi.com/v1/images/search");
	const jsonData = await response.json();
	// --->goodPractice
	let catString = jsonData[0].url;
	// --------> response === [*]
	populateCatToScreen(catString);
};

const startGame = () => {
	// 1.Load Cat
	getCat();
	// 1.Load Dog
	getDog();
};

startGame();

const winner = document.querySelector(".winner");

function selectCat() {
	catScore++;
	catPoints.innerHTML = catScore;
	if (catScore===20) {
		winner.textContent = "Cats WIN this round";
		catScore=0;
		catPoints.innerHTML = catScore;

	}
}

function selectDog() {
	dogscore++;
	dogPoints.innerHTML = dogscore;
	if (dogScore===20) {
		winner.textContent = "Dogs WIN this round";
		catScore=0;
		dogPoints.innerHTML = dogscore;

	}

}