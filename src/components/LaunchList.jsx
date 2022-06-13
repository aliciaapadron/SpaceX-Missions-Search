import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';
import { v4 as uuidv4 } from 'uuid';
import * as API from '../services/launches';

export function LaunchList() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);
  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={uuidv4()} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
