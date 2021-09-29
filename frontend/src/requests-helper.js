const server = 'http://localhost:3000'
export function getRequest(endpoint, data, callback) {
    fetch( server + endpoint, {
      method:'GET',
      data 
    })
    .then( response => response.json())
    .then( response => callback(response) )
    return false
}
  
export function postRequest(endpoint, data) {
    return fetch( server + endpoint, {
        method:'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}