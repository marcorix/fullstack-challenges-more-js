// TODO: Call the Weather API when the form is submitted
const form = document.querySelector('form');
const token = "pk.eyJ1IjoibWFyY29yaXgiLCJhIjoiY2xhdGVkOGVrMG9sMTNzbXM4eHFpc29reiJ9.Yxophd6ZWayGqzN6M_OpNA";

const displayCoordinates = (long, lat) => {
  document.querySelector('p').innerText = `Longitude: ${long}, Latitude: ${lat}`;
};

const injectMap = (long, lat) => {
  mapboxgl.accessToken = token;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [long, lat],
    zoom: 12,
  });

  new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
};

// TODO: Create a function to get the weather info
const getWeatherInfo = (query) => {
  // TODO: Replace the following line with the correct url
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${token}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // TODO: Insert the weather info in the DOM (description, date, temperature...)
      const long = data.features[0].center[0];
      const lat = data.features[0].center[1];
      displayCoordinates(long, lat);
      injectMap(long, lat);
    });
};

// TODO: Add an event listener to the form
form.addEventListener('submit', (e) => {
  // TODO: On submit, in the callback, call the getWeatherInfo function
  e.preventDefault();
  const query = document.querySelector("form > input").value;
  getWeatherInfo(query);
});
