import 'dotenv/config'

export async function post() {
  const deliveryResponse = await fetch("https://demo.stepzen.net/api/meetup/__graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        delivery(carrier: "ups", trackingId: "1ZY762A8A895521283") {
          status
          statusDate
        }
      }`
    })
  })

  const deliveryData = await deliveryResponse.json()
  
  if (deliveryData) {
    return {
      body: deliveryData
    }
  }
  if (weatherData) {
    return {
      body: weatherData
    }
  }
}