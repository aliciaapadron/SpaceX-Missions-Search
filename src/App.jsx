import { useState, useEffect } from 'react';
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from '@chakra-ui/react';
import { HiCalendar } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import * as API from './services/launches';
import logo from './assets/logo-spacex.png';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

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
          <Box key={uuidv4()} bg="gray.100" p={4} m={4} borderRadius="lg">
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
            <Flex align="center">
              <HiCalendar />
              <Text fontSize="sm" ml={1}>
                {dayjs(launch.launch_data_local)
                  .locale('es')
                  .format('D MMMM, YYYY')}
              </Text>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  );
}
