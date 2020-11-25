import axios from 'axios';

const getAirportId = async (location) => {
  const airport = await axios.get(`https://api.skypicker.com/locations?term=${location}&location_types=airport`);
  if (!airport.data.locations.length === 0) {
    throw new Error('No location found!');
  } else {
    return airport.data.locations[0].id;
  }
};

const getFlights = async (flyFrom, flyTo, date) => axios.get(`https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${date}&date_to=${date}&partner=picky`);

export { getAirportId, getFlights };
