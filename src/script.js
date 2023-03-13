async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice/117");
  const adviceObj = await response.json();

  adviceId.innerHTML = adviceObj.slip.id;
  adviceQuote.innerHTML = adviceObj.slip.advice;
}

getAdvice();
