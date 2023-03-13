async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice")
  const adviceText = await response.text();
  const adviceObj = JSON.parse(adviceText);
  console.log(adviceObj);

  adviceId.innerHTML = `${adviceObj["slip"]["id"]}`;
  adviceQuote.innerHTML = `${adviceObj["slip"]["advice"]}`;
}

getAdvice();
