async function getAdvice() {
  let min = 1;
  let max = 220;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //generating a random number between 1 and 220
  const response = await fetch(`https://api.adviceslip.com/advice/${117}`);
  const adviceObj = await response.json(); //fething the object containing the quote ID and the advice itself

  console.log(adviceObj);

  adviceId.innerHTML = adviceObj.slip.id;
  adviceQuote.innerHTML = adviceObj.slip.advice; //adding the elements to the page dynamically
}

getAdvice(); 

adviceBtn.addEventListener("click", getAdvice); //adding the click event to the button
