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

<h2>{data.customerByEmail.name}</h2>

<div>Address: {data.customerByEmail.street}, {data.customerByEmail.stateProvince}</div>

<p>Hello {data.customerByEmail.name}, which package would you like the delivery status of?</p>