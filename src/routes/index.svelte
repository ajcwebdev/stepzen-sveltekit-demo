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
</script>

<main class="container">
  <h1>StepZen Customer Demo</h1>
  
  <p>Hello <b>{data.customerByEmail.name}</b>, you are currently in <b>{data.customerByEmail.city}</b> and the temperature is <b>{data.customerByEmail.weather.temp}</b> degrees.</p>

  <h3>Here is your delivery information:</h3>
  {#each data.customerByEmail.orders as {
    createdOn, carrier, delivery
  }}
    <ul>
      <li>Carrier is <b>{carrier}</b></li>
      <li>Delivery created on <b>{createdOn}</b></li>
      <li>Delivery status is <b>{delivery.status}</b> on <b>{delivery.statusDate}</b></li>
    </ul>
  {/each}
  
  <hr>

  <footer>
    <a href="https://stepzen.com/" target="_blank" rel="noopener noreferrer">
      Powered by StepZen
    </a>
  </footer>
</main>