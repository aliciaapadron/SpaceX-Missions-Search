import { v4 as uuidv4 } from 'uuid';
const API_URL = 'https://api.spacexdata.com/v3';

export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    data.map((rocket) => {
      rocket.id = uuidv4();
      console.log('viendo', rocket);
      return rocket;
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLaunchByFligthNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
