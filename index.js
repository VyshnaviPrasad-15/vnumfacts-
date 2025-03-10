let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function factdisplay(event) {
    if (event.key === "Enter") {
        let inputVal = userInputEl.value;
        let url = "https://apis.ccbp.in/numbers-fact?number=" + inputVal;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                factEl.textContent = jsonData.fact;
            });
    }
}
userInputEl.addEventListener("keypress", factdisplay);