import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import * as API from '../services/launches';

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();
  useEffect(() => {
    API.getLaunchByFligthNumber(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {!launch ? (
        <div>Loading...</div>
      ) : (
        <>
          <Flex>
            <Text fontSize="2xl">
              Mission <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
              {launch.launch_success ? 'Success' : 'Failure'}
            </Tag>
          </Flex>
          <Box>
            <img src={launch.links?.mission_patch_small} alt="mission path" />
            <h2>Name: {launch.rocket?.rocket_name}</h2>
            <h2>Type: {launch.rocket?.rocket_type}</h2>
            <h2>
              Nationality: {launch.rocket?.second_stage.payloads[0].nationality}
            </h2>
            <h2>Details: {launch.details}</h2>
            <nav>
              <a
                href={launch.links?.wikipedia}
                target="_blank"
                alt="link to wiki info"
                title="link to wiki info"
              >
                See more info
              </a>
              <br />
              <a
                href={launch.links?.video_link}
                target="_blank"
                alt="link to youtube video"
                title="link to youtube video"
              >
                See video
              </a>
            </nav>
          </Box>
        </>
      )}
    </Box>
  );
}
