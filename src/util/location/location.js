export const getCurrentLatitude = async () => {
  let promise = await new Promise((resolve, reject) => {
    let geolocation = require('geolocation')
    geolocation.getCurrentPosition((err, position) => {
      if (err) reject(err)
      resolve(position.coords.latitude)
    })
  })

  return await promise
}

export const getCurrentLongitude = async () => {
  let promise = await new Promise((resolve, reject) => {
    let geolocation = require('geolocation')
    geolocation.getCurrentPosition((err, position) => {
      if (err) reject(err)
      resolve(position.coords.longitude) 
    })
  })

  return await promise
} 