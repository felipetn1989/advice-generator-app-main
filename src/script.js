async function getAdvice() {
  let min = 1;
  let max = 220;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const response = await fetch(`https://api.adviceslip.com/advice/${117}`);
  const adviceObj = await response.json();

  console.log(adviceObj);

  adviceId.innerHTML = adviceObj.slip.id;
  adviceQuote.innerHTML = adviceObj.slip.advice;
}

getAdvice();

adviceBtn.addEventListener("click", getAdvice);
