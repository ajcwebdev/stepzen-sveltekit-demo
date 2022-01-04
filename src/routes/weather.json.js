import 'dotenv/config'

export async function post() {
  const weatherResponse = await fetch("https://demo.stepzen.net/api/meetup/__graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        customerByEmail(email: "john.doe@example.com") {
          weather {
            temp
          }
        }
      }`
    })
  })

  const weatherData = await weatherResponse.json()
  console.log(weatherData)
  
  if (weatherData) {
    return {
      body: weatherData
    }
  }
}