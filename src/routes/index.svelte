<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/customer.json', {
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
  import { delivery } from '../stores.js';
  import { deliveryDate } from '../stores.js';

  function getWeather() {
    weather.update(n => data.customerByEmail.weather.temp);
  }

  function getDelivery() {
    delivery.update(n => data.delivery.status);
    deliveryDate.update(n => data.delivery.statusDate);
  }

  let temperature, status, date;
  
  weather.subscribe(temperatureValue => temperature = temperatureValue);
  delivery.subscribe(statusValue => status = statusValue);
  deliveryDate.subscribe(dateValue => date = dateValue);
</script>

<main class="container">
  <h1>StepZen Customer Demo</h1>
  <h2>{data.customerByEmail.name}</h2>

  <div>Address: {data.customerByEmail.street}, {data.customerByEmail.stateProvince}</div>
  
  <p>Hello {data.customerByEmail.name}, which package would you like the delivery status of?</p>
  
  <div>Temperature: {temperature}</div>
  
  <button on:click={getWeather}>
    Get Current Temperature
  </button>
  <br><br>
  <div>Status: {status}</div>
  <div>Date: {date}</div>

  <button on:click={getDelivery}>
    Get Delivery Status
  </button>

  <!-- <form on:submit|preventDefault={getDelivery}>
    <div>
      <label for="carrier">Choose a carrier:</label>
      <select name="carrier">
        <option value="ups">UPS</option>
        <option value="fedex">Fedex</option>
      </select>
    </div>
    <br>
    <div>
      <label for="trackingId">Tracking ID:</label>
      <input name="trackingId">
    </div>
    <br>
    <button type="submit">Submit</button>
  </form> -->
  <hr>

  <footer>
    <a href="https://stepzen.com/" target="_blank" rel="noopener noreferrer">
      Powered by StepZen
    </a>
  </footer>
</main>