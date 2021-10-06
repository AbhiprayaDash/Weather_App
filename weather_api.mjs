import fetch from 'node-fetch';
//returns Promise
const weatherAPI = async() =>{
    const response = await fetch('http://api.weatherstack.com/current?access_key=1c47b7e112020da1e99e6e7e3796e4b1&query=Bhubaneswar');
    return response.json()
}
export default weatherAPI

