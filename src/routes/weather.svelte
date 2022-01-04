<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/weather.json', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return {
        props: { ...(await response.json()) }
      }
    } catch (error) {
      console.error(`Error in load function for /: ${error}`)
    }
  }
</script>

<script>
  export let data
  import { weather } from '../stores.js';

  function getWeather() {
    weather.update(n => data.customerByEmail.weather.temp);
  }
  let temperature;

  weather.subscribe(temperatureValue => {
    temperature = temperatureValue;
  });
</script>

<div>Temperature: {temperature}</div>

<button on:click={getWeather}>
	Get Current Temperature
</button>