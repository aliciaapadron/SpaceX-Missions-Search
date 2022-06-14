import { useState, useEffect } from 'react';

import { LaunchItem } from './LaunchItem';
import { v4 as uuidv4 } from 'uuid';
import * as API from '../services/launches';
import { Loader } from './Loader';

export function LaunchList() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);
  return (
    <>
      {launches.length === 0 ? (
        <Loader></Loader>
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
