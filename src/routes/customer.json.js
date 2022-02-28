import 'dotenv/config'

export async function post() {
  const response = await fetch("https://demo.stepzen.net/api/basicdemo/__graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        customerByEmail(email: "john.doe@example.com") {
          name
          city
          orders {
            createdOn
            carrier
            delivery {
              status
              statusDate
            }
          }
          weather {
            temp
          }   
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