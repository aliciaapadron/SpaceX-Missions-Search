import {
  FaRocket,
  FaToolbox,
  FaFlag,
  FaSearch,
  FaInfo,
  FaVideo,
} from 'react-icons/fa';
import { Box, Flex, Spacer, Tag, Text, Icon } from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as API from '../services/launches';

import { NotFoundPage } from './applications/NotFoundPage';
import { Loader } from './Loader';

export function LaunchDetails(props) {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();
  useEffect(() => {
    setLaunch(props.dataRockets.find((rocket) => rocket.id == launchId));
  }, [launchId]);

  if (launch.mission_name === undefined) {
    return <NotFoundPage />;
  }
  return (
    <Box className="box">
      <Box className="box__details" bg="gray.100" p={4} m={4} borderRadius="lg">
        {!launch ? (
          <Loader></Loader>
        ) : (
          <>
            <Flex>
              <Text className="mission" fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
                {launch.launch_success ? 'Success' : 'Failure'}
              </Tag>
            </Flex>
            <Box>
              <div className="div_img">
                <img
                  className="mission__img"
                  src={launch.links?.mission_patch_small}
                  alt="mission path"
                />
              </div>
              <div className="box_icon">
                <Icon
                  className="box_icon__icon"
                  as={FaRocket}
                  color="gray.500"
                />
                <h2 className="mission__title">
                  <span className="mission__span">Rocket Name:</span>{' '}
                  {launch.rocket?.rocket_name}
                </h2>
              </div>

              <div className="box_icon">
                <Icon
                  className="box_icon__icon"
                  as={FaToolbox}
                  color="gray.500"
                />
                <h2 className="mission__title">
                  <span className="mission__span">Type:</span>{' '}
                  {launch.rocket?.rocket_type}
                </h2>
              </div>

              <div className="box_icon">
                <Icon className="box_icon__icon" as={FaFlag} color="gray.500" />
                <h2>
                  <span className="mission__span">Nationality:</span>{' '}
                  {launch.rocket?.second_stage.payloads[0].nationality}
                </h2>
              </div>

              <div className="box_icon">
                <Icon
                  className="box_icon__icon"
                  as={FaSearch}
                  color="gray.500"
                />
                <h2 className="mission__title">
                  <span className="mission__span">Details:</span>{' '}
                  {launch.details}
                </h2>
              </div>

              <nav className="mission__nav">
                <div className="box_icon">
                  <Icon
                    className="box_icon__icon2"
                    as={FaInfo}
                    color="gray.500"
                  />
                  <a
                    className="mission__span"
                    href={launch.links?.wikipedia}
                    target="_blank"
                    alt="link to wiki info"
                    title="link to wiki info"
                  >
                    See more info
                  </a>
                </div>
                <div className="box_icon">
                  <Icon
                    className="box_icon__icon2"
                    as={FaVideo}
                    color="gray.500"
                  />
                  <a
                    className="mission__span"
                    href={launch.links?.video_link}
                    target="_blank"
                    alt="link to youtube video"
                    title="link to youtube video"
                  >
                    See video
                  </a>
                </div>
              </nav>
              <div className="divbtn">
                <Link
                  className="divbtn__backbtn"
                  to="/"
                  title="Volver al inicio"
                >
                  Back
                </Link>
              </div>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
