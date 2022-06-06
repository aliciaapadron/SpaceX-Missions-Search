import { useState, useEffect } from 'react';
import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItem';
import { v4 as uuidv4 } from 'uuid';
import * as API from './services/launches';
import logo from './assets/logo-spacex.png';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  return (
    <>
      <Image m={4} src={logo} alt="logo de spaceX" width={300} />
      <Heading as="h1" size="lg">
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={uuidv4()} {...launch} />
        ))}
      </section>
    </>
  );
}
