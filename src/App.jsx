import './styles/App.scss';

import { Image } from '@chakra-ui/react';
import logo from './assets/logo-spacex.png';

import { Heading } from '@chakra-ui/react';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { Filters } from './components/filters/Filters';
import { NotFoundPage } from './components/applications/NotFoundPage';
import { getAllLaunches } from './services/launches';

import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import ls from './services/localStorage';

export function App() {
  const [dataRockets, setDataRockets] = useState(ls.get('rockets', []));
  const [filterRocket, setFilterRocket] = useState('');
  //useEffect
  useEffect(() => {
    if (dataRockets.length === 0) {
      getAllLaunches().then((dataFromApi) => {
        setDataRockets(dataFromApi);
      });
    }
  }, []);

  //useEffect para localStorage
  useEffect(() => {
    ls.set('rockets', dataRockets);
  }, [dataRockets]);

  //prevenir el intro
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //filtro por nombre de nave
  const handleFilterRocket = (value) => {
    setFilterRocket(value);
  };

  //filtros
  const rocketFilters = dataRockets
    .sort((a, b) => a.mission_name.localeCompare(b.mission_name))
    .filter((launch) => {
      return launch.mission_name
        .toLowerCase()
        .includes(filterRocket.toLocaleLowerCase());
    });

  //mensaje que error
  const searchRockets = () => {
    if (filterRocket !== '' && rocketFilters.length === 0) {
      return (
        <section className="section">
          <div className="section__diverror">
            <p className="section__diverror--msn">
              Ups! 😅 "{filterRocket}" does not exist, try another movie.
            </p>
          </div>
        </section>
      );
    } else {
      return <LaunchList rockets={rocketFilters} />;
    }
  };

  //limpiar inputs
  const resetInputs = () => {
    setFilterRocket('');
  };
  const { pathname } = useLocation();
  const dataPath = matchPath('/launch/:launchId', pathname);

  const rocketId = dataPath !== null ? dataPath.params.rocketId : null;
  const rocketFound = dataRockets.find(
    (item) => item.id === parseInt(rocketId)
  );
  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Heading align="center" as="h1" size="lg" m={4}>
                SpaceX Launches
              </Heading>
              <Filters
                handleSubmit={handleSubmit}
                handleFilterRocket={handleFilterRocket}
                filterRocket={filterRocket}
                resetInputs={resetInputs}
              />
              {searchRockets()}
              <LaunchList rockets={rocketFilters} />
            </>
          }
        />

        <Route
          path="launch/:launchId"
          element={<LaunchDetails rocket={rocketFound} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
