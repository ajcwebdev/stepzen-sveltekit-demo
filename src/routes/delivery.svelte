<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/delivery.json', {
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
  import { delivery } from '../stores.js';
  import { deliveryDate } from '../stores.js';

  function getDelivery() {
    delivery.update(n => data.delivery.status);
    deliveryDate.update(n => data.delivery.statusDate);
  }

  let status;
  let date;

  delivery.subscribe(statusValue => {
    status = statusValue;
  });

  deliveryDate.subscribe(dateValue => {
    date = dateValue;
  });
</script>

<div>Status: {status}</div>
<div>Date: {date}</div>

<button on:click={getDelivery}>
	Get Delivery Status
</button>

<!-- <main class="container">
  <form on:submit|preventDefault={getDelivery}>
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
  </form>
</main> -->