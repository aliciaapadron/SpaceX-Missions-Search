import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import * as API from './services/launches';
import logo from './assets/logo-spacex.png';
import { v4 as uuidv4 } from 'uuid';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  return (
    <>
      <img src={logo} alt="logo de spaceX" width={300} />
      <Heading as="h1" size="lg">
        SpaceX Launches
      </Heading>
      <ul>
        {launches.map((launch) => (
          <li key={uuidv4()}>
            {launch.mission_name}({launch.launch_year})
          </li>
        ))}
      </ul>
    </>
  );
}
