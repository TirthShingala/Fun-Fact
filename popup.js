document.getElementById("btn").addEventListener("click", getFact);
const fact = document.getElementById("fact");

function getFact() {
  fact.innerHTML = "Loading...";
  fetch("https://asli-fun-fact-api.herokuapp.com/?ref=devresourc.es", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((funfact) => {
      fact.innerHTML = funfact.data.fact;
    })
    .catch((err) => {
      console.error(err);
    });
}
