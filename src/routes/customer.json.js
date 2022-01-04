import 'dotenv/config'

export async function post() {
  const response = await fetch("https://demo.stepzen.net/api/meetup/__graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        customerByEmail(email: "john.doe@example.com") {
          postalCode
          countryRegion
          city
          email
          name
          street
          creditCard
          stateProvince
          weather {
            temp
          }
        }
        delivery(carrier: "ups", trackingId: "1ZY762A8A895521283") {
          status
          statusDate
        }
      }`
    })
  })

  const data = await response.json()
  
  if (data) {
    return {
      body: data
    }
  }
}