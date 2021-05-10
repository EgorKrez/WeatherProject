export const getCurrentLatitude = () => {
    let geolocation = require('geolocation')
    geolocation.getCurrentPosition(async (err, position) => {
      if (err) throw err
      console.log(position.coords.latitude);
      return await position.coords.latitude; 
    })
}

export const getCurrentLongitude = () => {
    let geolocation = require('geolocation')
    geolocation.getCurrentPosition(async (err, position) => {
      if (err) throw err
      console.log(position.coords.longitude); 
      return await position.coords.longitude; 
    })
} 
