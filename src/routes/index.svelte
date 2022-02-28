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
  <section class="block media-block media">
    <div class="container w-cols-8 text-center mb-2">
      <img src="/images/mark-dark.svg" alt="StepZen" class="logo" style="margin: 0 auto;padding-bottom:1rem;" />
      <h2 class="weight-medium">
        StepZen Demo
      </h2>
      <p>Hello <b>{data.customerByEmail.name}</b>, you are currently in <b>{data.customerByEmail.city}</b> and the temperature is <b>{data.customerByEmail.weather.temp}</b> degrees.</p>
    </div>
    <div class="container">
      <div class="grid">
        <div class="block-header">
          <h3>Here is your delivery information:</h3>
          <div class="highlights-list">
            {#each data.customerByEmail.orders as {
              createdOn, carrier, delivery, id
            }}
            <h4>Delivery ID #{id}</h4>
              <ul>
                <li>
                  <p>
                    Carrier is <b>{carrier}</b>
                  </p>
                </li>
                <li>
                  <p>
                    Delivery created on <b>{createdOn}</b>
                  </p>
                </li>
                <li>
                  <p>
                    Delivery status is <b>{delivery.status}</b> on <b>{delivery.statusDate}</b>
                  </p>
                </li>
              </ul>
            {/each}
          </div>
        </div>
        <div class="block-content">
          <img src="/images/dev-art-json2sdl.png" alt="code-demo" />
        </div>
      </div>
    </div>
  </section>  
  <div class="site-footer-sub">
    <img src="/images/mark-dark.svg" alt="StepZen" class="logo" style="max-width:50px" />
    <a href="https://stepzen.com/" target="_blank" rel="noopener noreferrer">
      Powered by StepZen
    </a>
    <small class="site-footer-legal">Copyright © 2022 StepZen, Inc.</small>
    <ul class="social-nav">
      <li>
        <a
          href="https://discord.gg/9k2VdPn2FR"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on Discord"
          ><svg
            viewBox="0 0 175 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              d="M69.4 83.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
              fill="currentColor"
            ></path>
            <path
              d="M154.5 0h-134C9.2 0 0 9.2 0 20.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V20.6C175 9.2 165.8 0 154.5 0zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
              fill="currentColor"
            ></path></svg
        ></a>
      </li>
      <li>
        <a
          href="https://github.com/steprz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="StepZen on GitHub"
          ><svg
            viewBox="0 0 54 53"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27 0C12.085 0 0 12.085 0 27c0 11.925 7.736 22.05 18.466 25.62 1.354.248 1.845-.58 1.845-1.3 0-.643-.025-2.34-.034-4.59-7.515 1.627-9.097-3.62-9.097-3.62-1.23-3.12-2.997-3.956-2.997-3.956-2.452-1.669.185-1.633.185-1.633 2.707.194 4.13 2.776 4.13 2.776 2.408 4.132 6.319 2.937 7.858 2.25.247-1.748.95-2.936 1.714-3.61-5.994-.678-12.296-2.998-12.296-13.343 0-2.954 1.055-5.362 2.777-7.252-.273-.675-1.204-3.427.263-7.144 0 0 2.268-.72 7.427 2.768A25.844 25.844 0 0127 13.06c2.295.01 4.606.306 6.759.905 5.16-3.488 7.418-2.768 7.418-2.768 1.476 3.717.554 6.469.27 7.144 1.733 1.89 2.77 4.298 2.77 7.252 0 10.372-6.309 12.647-12.321 13.324.968.826 1.827 2.477 1.827 4.993 0 3.611-.025 6.52-.025 7.41 0 .72.482 1.563 1.854 1.3C46.273 49.043 54 38.925 54 27 54 12.085 41.915 0 27 0z"
              fill="currentColor"
            ></path></svg
        ></a>
      </li>
      <li>
        <a
          href="https://twitter.com/stepzen_dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on Twitter"
          ><svg
            viewBox="0 0 54 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              d="M54 5.258a22.08 22.08 0 01-6.363 1.739A11.115 11.115 0 0052.506.87a22.32 22.32 0 01-7.031 2.691A11.08 11.08 0 0026.597 13.66 31.403 31.403 0 013.757 2.083a10.991 10.991 0 00-1.5 5.573c0 3.84 1.95 7.234 4.93 9.22a11.014 11.014 0 01-5.018-1.39v.142a11.074 11.074 0 008.887 10.863 11.027 11.027 0 01-5.003.193 11.097 11.097 0 0010.345 7.7A22.217 22.217 0 010 38.963a31.329 31.329 0 0016.98 4.983c20.381 0 31.528-16.884 31.528-31.527 0-.472-.018-.958-.036-1.433A22.69 22.69 0 0054 5.26v-.002z"
              fill="currentColor"
            ></path></svg
        ></a>
      </li>
      <li>
      </li>
    </ul>
  </div>  
</main>