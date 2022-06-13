import { HiCalendar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex>
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
          {launch.launch_success ? 'Success' : 'Failure'}
        </Tag>
      </Flex>
      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500" />
        <Text fontSize="sm" ml={1} color="gray.500">
          {dayjs(launch.launch_data_local).locale('es').format('D MMMM, YYYY')}
        </Text>
      </Flex>
      <Link to={`/launch/${uuidv4()}`}>
        <Button colorScheme="blue" mt={2}>
          More details
        </Button>
      </Link>
    </Box>
  );
}
