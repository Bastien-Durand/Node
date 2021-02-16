// Client side javascript

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const weatherImage = document.querySelector("#weatherImage");

const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");
const messageFour = document.querySelector("#message-4");
const messageFive = document.querySelector("#message-5");
const messageSix = document.querySelector("#message-6");

const clear = () => {
  messageTwo.textContent = "";
  messageThree.textContent = "";
  messageFour.textContent = "";
  messageFive.textContent = "";
  messageSix.textContent = "";
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  clear();

  fetch(`/weather?search=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = `Location: ${data.location}`;
        messageTwo.textContent = `Current Temperature: ${data.forecast.temperature}`;
        messageThree.textContent = `UV Index: ${data.forecast.uv}`;
        messageFour.textContent = `Wind Speed: ${data.forecast.windSpeed}km`;
        messageFive.textContent = `Wind Direction: ${data.forecast.windDir}`;
        messageSix.textContent = `Local Time: ${data.forecast.time}`;
        weatherImage.src = data.forecast.icon;
      }
    });
  });
});
