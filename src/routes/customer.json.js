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
        }
      }`
    })
  })

  const data = await response.json()
  console.log(data)
  
  if (data) {
    return {
      body: data
    }
  }
}